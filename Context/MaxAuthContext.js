import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store'
import { BASE_URL_APP, BASE_URL_AUTH } from "../config";
export const MaxAuthContext = createContext()
export const useMaxAuth = () => useContext(MaxAuthContext)


export const AuthContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [authtoken, setAuthToken] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)


    const login = async (username, password) => {
        //setIsLoading(true)
      try {
        const result = await axios.post(`${BASE_URL_APP}/token/login/`,{username,  password
        })
           
            const auth_Token = result.data.auth_token;
            
            setAuthToken(auth_Token)
            
            setAuthenticated(true)
        
            axios.defaults.headers.common['Authorization'] = `Token ${result.data.auth_token}`
            
            //set item in async store
            await SecureStore.setItemAsync('MY_TOKEN', result.data.auth_token)
         
            return result
            
        } catch (error) {
            return { err: `Error has occurred ${error}` };
      } 
      //setIsLoading(false)
        
    }


  

    const logout = async () => {
        console.log('me and you')

        //delete token from storage
        await SecureStore.deleteItemAsync('MY_TOKEN')

        //reset headers
        axios.defaults.headers.common['Authorization'] = ''

        //reset state
        setAuthToken(null)
        setAuthenticated(false)

  }

    // create useEffect
    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync('MY_TOKEN')
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Token ${token}`
                setAuthToken(token)
                setAuthenticated(true)
            } 
        }
        loadToken()
    }, [])

    const value = {
        authtoken,
        authenticated,
        login,
        logout
    }
    
    return <MaxAuthContext.Provider value={value}>{children}</MaxAuthContext.Provider>
}

