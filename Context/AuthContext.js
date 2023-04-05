import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL_APP, BASE_URL_AUTH } from "../config";
import axios from "axios";





export const AuthContext = createContext()

// create a provider
export const AuthProvider = ({ children }) => {
//state
    const [isLoading, setIsLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [profileData,setProfileData] = useState(null)
    const [test,setTest] = useState('Test Value')
   


    // define async storage functions
    // const storeToken = async (value) => {
    //     try {
    //         // use for storing user info
    //         // await AsyncStorage.setItem('myToken', JSON.stringify(value));
    //         await AsyncStorage.setItem('myToken',value);
    //     } catch (error) {
    //       console.log(`Error saving user token to async storage ${error}`);
    //     }
    // };

    // const storeProfileInfo = async (value) => {
    //     try {
    //         // use for storing user info
    //         await AsyncStorage.setItem('profileInfo', JSON.stringify(value));
    //         console.log(`async ${value}`)
    //     } catch (error) {
    //       console.log(`Error saving user info to async storage ${error}`);
    //     }
    // };

 
    // const login = (username,password) => {
    //     setIsLoading(true)
    //     axios.post(`${BASE_URL_APP}/token/login/`, {
    //         username,
    //         password
    //     })
    //     .then((res) => {
            
    //         let loginToken = res.data.auth_token
        
    //         console.log(`luper ${loginToken}`)
    //         //set token
    //         setUserToken(loginToken)
    //         //AsyncStorage.setItem('myToken', userToken)
    //         console.log(userToken)

    //         axios.get(`${BASE_URL_AUTH}/me`,{
    //             headers: {
    //             Authorization: `Token ${loginToken}`,
    //             },
    //             }
    //         ).then((response) => {
    //             setUserToken(loginToken)
    //             console.log(`lupa ${userToken}`)
    //             setProfileData(response.data.user)
    //             console.log(`mydata ${profileData}`)

    //             // 
    //             AsyncStorage.setItem('myToken', userToken)
    //             AsyncStorage.setItem('profileInfo',userToken)
                
    //         }).catch((e) => {
    //             console.log(`login errrror ${e}`)
    //         })

           
         

    //     })
    //     .catch((e) => {
    //         console.log(`Login error ${e}`)
    //     })

    //     setIsLoading(false)
    // }


 
    
    
    const logout = async () => {

        try {
        setIsLoading(true)
        setToken(null)
        //await AsyncStorage.removeItem('myToken')
       // await AsyncStorage.removeItem('profileInfo')
      // TODO: remove userinfo also
        setIsLoading(false)
            
        } catch (error) {
            console.log(`Error logging out ${error}`)
        }
    }

 

  

    // create a is loggedin function to check for storage keys
    // const isLoggedIn = async () => {

    //         try {
    //             setIsLoading(true)
    //             //let Token = await AsyncStorage.getItem('myToken')
    //             // let userInfo = await AsyncStorage.getItem('profileInfo')
    //             // userInfo = JSON.parse(userInfo)
                
    //             // setUserToken(Token)
    //             // if (userInfo) {
    //             //     setUserToken(Token)
    //             //     setProfileData(userInfo)
    //             // }
    //             setIsLoading(false)
    //         } catch (error) {
    //             console.log(` Error is ${error}`)
    //         }
    // }
    

    // Run useEffect
    // useEffect(() => {
    //     isLoggedIn()
    // },[])

    // const values = {
    //     login,logout,isLoading,userToken,profileData
    // }
    
    return (
        <AuthContext.Provider value={{test,isLoading,token}}>
                {children}
        </AuthContext.Provider>
    )
}

// create a hook to access the auth context
export const useAuth = () => useContext(AuthContext);