import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
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