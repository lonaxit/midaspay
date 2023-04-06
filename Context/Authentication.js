import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import * as SecureStore from 'expo-secure-store'
import { BASE_URL_APP, BASE_URL_AUTH } from "../config";

// create a context
export const AuthenticationContext = createContext()

// create a hook to access the auth context
export const useAuthentication = () => useContext(AuthenticationContext);



export const AuthenticationProvider = ({ children }) => {

    const [authtoken, setAuthToken] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)
    const [isLoading, setIsLoading]= useState(false)
    const [userData, setUserData] = useState(null);

    // FUNCTIONS

    //login
    const login = async (username, password) => {
        // setIsLoading(true)
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
        
    }

    //logout
    const logout = async () => {

        //delete token from storage
        await SecureStore.deleteItemAsync('MY_TOKEN')

        //reset headers
        axios.defaults.headers.common['Authorization'] = ''

        //reset state
        setAuthToken(null)
        setAuthenticated(false)

  }

  const fetchUserData = async () => {
    try {
      const result = await axios.get(`${BASE_URL_AUTH}/me`)
         
      setUserData(result.data.user);
      console.log('hhhhhhhhh=======mmmmmmmm')
      console.log(userData)
      
    } catch (error) {
      console.log(error);
    }
  };
  

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
    
      // create useEffect to update authenticated state
      // useEffect(() => {
      //   if (authtoken) {
      //       setAuthenticated(true)
      //       setIsLoading(false)
      //   } else {
      //       setAuthenticated(false)
      //       setIsLoading(false)
      //   }
      // }, [authtoken])
    
    
      // useEffect(() => {
      //   const fetchUserData = async () => {
      //     try {
      //       const result = await axios.get(`${BASE_URL_AUTH}/me`)
               
      //       setUserData(result.data.user);
            
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   };
    
      //   if (authenticated) {
      //     fetchUserData();
      //   }
      // }, [authenticated]);



    //values for use in authprovider
    const value = { authenticated, userData,isLoading, authtoken, login, logout,fetchUserData }
    
    return (
        <AuthenticationContext.Provider value={value}>
                {children}
        </AuthenticationContext.Provider>
    )
}

