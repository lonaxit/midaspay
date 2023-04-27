import axios from "axios";
import React, { createContext, useState,useContext, useEffect, Children } from 'react';
import APIService from "../service/APIService";
import * as SecureStore from 'expo-secure-store'


// create a context
export const MidasAuthentiocnContext = createContext()
// create a hook to access the auth context
export const useMidasAuthentication = () => useContext(MidasAuthentiocnContext);


const MidasAuthContextProvider = ({ children }) => {

    const [authtoken, setAuthToken] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)
    //const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [userData, setUserData] = useState(null);


    async function login(username, password) {

        //setIsAuthenticating(true) use in login screen as a state

        try {
            const token = await APIService.login(username, password)
            // const auth_Token = result.data.auth_token;
    
            setAuthToken(token)
            setAuthenticated(true)
            axios.defaults.headers.common['Authorization'] = `Token ${token}`
              //set item in async store
            await SecureStore.setItemAsync('MY_TOKEN', token)
            
        } catch (error) {
            return { err: `Error has occurred ${error}` };
        }

           // setIsAuthenticating(false)

      
    }

       
const logout = async () => {
    await SecureStore.deleteItemAsync('MY_TOKEN')
    axios.defaults.headers.common['Authorization'] = ''
        //reset state
        setAuthToken(null)
        setAuthenticated(false)
    }


 async function fetchProfile() {
     const result = await APIService.fetchProfile();
     setUserData(result.data.user);
        // setUser({ ...user, profile: data });
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
        userData,
        login,
        fetchProfile,
        logout
   }
    
    return (
        <MidasAuthentiocnContext.Provider value={value}>
            {children}
        </MidasAuthentiocnContext.Provider>
    )
}
export default MidasAuthContextProvider

