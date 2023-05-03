import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL_APP, BASE_URL_AUTH } from '../config'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()
export const useAuth = ()=> useContext(AuthContext)


export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState('')
    const [jwtToken, setJwtToken] = useState('')
    const [loans, setLoans] = useState('')
    // for checking logged in user
    const[splashLoading, setSplashLoading] = useState(false)


    

    // fake register
    const fakeRegister = (name, email, password) => {
        setIsLoading(true)
        axios.post(`${BASE_URL_APP}/register`)
            .then(res => {
                let info = res.data
                setFakeUserData(info)
                AsyncStorage.setItem('userinfo', JSON.stringify(info))
                setIsLoading(false)
            }).catch(err => {
                console.log(`error ${err}`)
                setIsLoading(true)
        })
    }

    const authenticate = (username, password) => {
        
        setIsLoading(true)

        axios.post(`${BASE_URL_APP}/token/login`, {
            username,password
        }).then(res => {
            let mytoken = res.data.auth_token
            setJwtToken(mytoken)
            axios.defaults.headers.common['Authorization'] = `Token ${mytoken}`
            AsyncStorage.setItem('MY_JWT', JSON.stringify(mytoken))
            fetchProfile()
            setIsLoading(false)

        }).catch(err => {
            console.log(`login error ${err}`)
            setIsLoading(false)
        })

        
    }

    const logout = () => {
        setIsLoading(true)

        // axios.post(`${BASE_URL_APP}/token/logout`,
        //     {},
        //     {
        //     headers:{Authorization: `Token ${jwtToken}`}
        //     }).then(res => {
        //         AsyncStorage.removeItem()
        //         setUserInfo({})
        //         setIsLoading(false)
        //     }).catch(err => {
                // setIsLoading(false)
        //         console.log(`logout error ${err}`)
        //       
        //     })
        
        setJwtToken('')
        axios.defaults.headers.common['Authorization'] = ''
        AsyncStorage.removeItem('MY_JWT')
        setIsLoading(false)
    }


    // check if user is logged in
    const isLoggedIn = async () => {
        try {
            setSplashLoading(true)

            let token = await AsyncStorage.getItem('MY_JWT')
            let data = await AsyncStorage.getItem('profileInfo')
            let userData = null;

            if (data) {
              userData = JSON.parse(data);
            }
            
            if (token) {

                setJwtToken(token)
                setUserData(userData)
                axios.defaults.headers.common['Authorization'] = `Token ${token}`
            }

            setSplashLoading(false)
      
        } catch (e) {
            setSplashLoading(false)
            console.log(`is logged in erro ${e}`)
        }
    }

// fetch users
const fetchProfile = async () => {
    try {
    const result = await axios.get(`${BASE_URL_AUTH}/me`)
      const profileData = result.data.user;
        
        if (profileData) {
                console.log(profileData)
                setUserData(profileData);
                await AsyncStorage.setItem('profileInfo', JSON.stringify(profileData));
                console.log(profileData)
              }
      
    } catch (error) {
      console.log(`user data error ${error}`);
    }
  };
  

    // fetch my loans
    const myLoans = (userid) => {
        
        // setIsLoading(true)
        axios.get(`${BASE_URL_APP}/${userid}/loans/`
        )
            .then(res => {
            let loans = res.data
            console.log(loans)
                setLoans(loans)
            // AsyncStorage.setItem('MY_JWT', JSON.stringify(mytoken))
            // setIsLoading(false)

        }).catch(err => {
            console.log(`Loan error ${err}`)
            // setIsLoading(false)
        })

        
    }

    // Call isLogged in on each page render
    useEffect(() => {
        isLoggedIn()
    }, [])
    
  

    const values = {
        fakeRegister,
        authenticate,
        logout,
        fetchProfile,
        myLoans,
        loans,
        isLoading,
        userData,
        jwtToken,
        splashLoading
    }
    
    return (
      
      <AuthContext.Provider value={values}>
          {children}
      </AuthContext.Provider>
      
  )
}

