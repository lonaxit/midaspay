import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import MidasHomeStack from './MidasHomeStack';
import AuthStack from './AuthStack'
import { useAuth } from '../contextAPI/AuthContext';
import MidasSplashStack from './MidasSplashStack';








const AppNav = () => {
const { jwtToken,splashLoading } = useAuth()



  // if (!authenticated) {
  //   return (
  //     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size={'large'} />
  //   </View>
  //   )
  // }
  
  return (
    // <NavigationContainer>
    //   { token !==null ? <HomeStack/> : <AuthStack/> }
    // </NavigationContainer>


    <NavigationContainer>
      {splashLoading ?
        (
          <MidasSplashStack /> 
        ): jwtToken ?
        (
          <MidasHomeStack />
        ) : (
          <AuthStack />
        )}

      {/* { jwtToken ? <MidasHomeStack/> : <AuthStack/> } */}
    </NavigationContainer>
  )
}

export default AppNav