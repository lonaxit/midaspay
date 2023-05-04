import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import MidasHomeStack from './MidasHomeStack';

import AuthStack from './AuthStack'
import { useMidasAuth } from '../AppStore/AuthorizationContext';

const AppNav = () => {

const { token, authenticated } = useMidasAuth()



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
    { authenticated ? <MidasHomeStack/> : <AuthStack/> }
      {/* <MidasHomeStack/> */}
    </NavigationContainer>
  )
}

export default AppNav