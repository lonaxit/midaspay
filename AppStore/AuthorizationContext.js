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
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [userInfo, setUserInfo] = useState([])
    const [loanInfo, setLoanInfo ] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [isFetchingSaving, setIsFetchingSaving] = useState(false)
  const [savingInfo, setSavingInfo] = useState([])
  
  const [isProfile, setIsProfile] = useState(false)
  const [profileInfo, setProfileInfo] = useState([])
   
    // fetch userinfo
    const fetchUser = async () => {
        try {
            const result = await axios.get(`${BASE_URL_AUTH}/me`)
            setUserInfo(result.data.user)
        } catch (e) {
            return {message:'Error fetching user'}
        }
    };

    // 
    const detailLoan = async (id) => {
        setIsFetching(true)
        try {
          const res = await axios.get(`${BASE_URL_APP}/loan/${id}/`)
          setLoanInfo(res.data)
        } catch (error) {
          setIsFetching(false)
          return { err: `Loan fetching error has occurred ${error}` };
  
        }
        setIsFetching(false)
  }
  
  // saving detail
  const savingList = async () => {
    setIsFetchingSaving(true)
    try {
      const res = await axios.get(`${BASE_URL_APP}/user-deposit/`)
      console.log(res.data)
      setSavingInfo(res.data)
    } catch (error) {
      setIsFetchingSaving(false)
      return { err: `Deposits fetching error has occurred ${error}` };

    }
    setIsFetchingSaving(false)
  }

  // get profile
  const getProfile = async (id) => {
    setIsProfile(true)
    try {
      const res = await axios.get(`${BASE_URL_APP}/${id}/profile/`)
      setProfileInfo(res.data)
    } catch (error) {
      setIsProfile(false)
      return { err: `Profile fetching error has occurred ${error}` };

    }
    setIsProfile(false)
  }


     // create useEffect
     useEffect(() => {

         const loadToken = async () => {
            
            const token = await SecureStore.getItemAsync('TOKEN_KEY')

             if (token) {
                
                //  console.log(`stored token ${token}`)
                 
                axios.defaults.headers.common['Authorization'] = `Token ${token}`
                setToken(token)
                setAuthenticated(true)
            }
        }

        loadToken()

     }, [])
    
    
    //login
    const login = async (username, password) => {
         setIsAuthenticating(true)
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
            setIsAuthenticating(false)
            return { err: `Login Error has occurred ${error}` };
            
      } 
      setIsAuthenticating(false)
        
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
    
    

    const value ={ login, logout,fetchUser, detailLoan,savingList,getProfile,loanInfo,savingInfo, isFetching,authenticated,token,userInfo,isAuthenticating,isFetchingSaving,isProfile,profileInfo }
    
  return (
        <MIDASContext.Provider value={value}>
          {children}
        </MIDASContext.Provider>
  )
}

