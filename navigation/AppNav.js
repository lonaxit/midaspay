import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

// import { useAuth } from '../Context/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { useAuthentication } from '../Context/Authentication';
import MidasHomeStack from './MidasHomeStack';



const AppNav = () => {





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
      <MidasHomeStack/>
    </NavigationContainer>
  )
}

export default AppNav