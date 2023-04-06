import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

// import { useAuth } from '../Context/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { useAuthentication } from '../Context/Authentication';



const AppNav = () => {
  // const { isLoading, token } = useAuth()

  const { authenticated } = useAuthentication()

  if (!authenticated) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
    </View>
    )
  }
  
  return (
    // <NavigationContainer>
    //   { token !==null ? <HomeStack/> : <AuthStack/> }
    // </NavigationContainer>

    <NavigationContainer>
      { authenticated ? <HomeStack/> : <AuthStack/> }
    </NavigationContainer>
  )
}

export default AppNav