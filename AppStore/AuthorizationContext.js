import React, { createContext, useContext, useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { BASE_URL_APP, BASE_URL_AUTH } from "../config";
import axios from 'axios'


// create a context
export const MIDASContext = createContext()


//create a hook to access the auth context
export const useMidasAuth = () => useContext(MIDASContext);



export const AuthorizationProvider = ({ children }) => {
    // state variables
    const [token, setToken] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)
    const [isAuthenticating, setIsAuthenticating]= useState(false)
   


     // create useEffect
     useEffect(() => {

         const loadToken = async () => {
            
            const token = await SecureStore.getItemAsync('TOKEN_KEY')

             if (token) {
                
                 console.log(`stored token ${token}`)
                 
                axios.defaults.headers.common['Authorization'] = `Token ${token}`
                setToken(token)
                setAuthenticated(true)
            }
        }

        loadToken()

     }, [])
    
    
    //login
    const login = async (username, password) => {
        // setIsAuthentication(true)
      try {
        const result = await axios.post(`${BASE_URL_APP}/token/login/`,{username,  password
        })
           
            const auth_Token = result.data.auth_token;
            
            setToken(auth_Token)
            setAuthenticated(true)
        
            axios.defaults.headers.common['Authorization'] = `Token ${auth_Token}`
            
            //set item in async store
            await SecureStore.setItemAsync('TOKEN_KEY', auth_Token)
            
        } catch (error) {
            //setIsAuthentication(false)
            return { err: `Login Error has occurred ${error}` };
            
      } 
      //setIsAuthentication(false)
        
    }

       //logout
       const logout = async () => {

        //delete token from storage
        await SecureStore.deleteItemAsync('TOKEN_KEY')

        //reset headers
        axios.defaults.headers.common['Authorization'] = ''

        //reset state
        setToken(null)
        setAuthenticated(false)

  }

    const value ={ login, logout, authenticated,token }
    
  return (
        <MIDASContext.Provider value={value}>
          {children}
        </MIDASContext.Provider>
  )
}

