import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{flex:1, justifyContent:'center', backgroundColor:'#06bcee'}}>
      <ActivityIndicator size="large" color="#fff"/>
    </View>
  )
}

export default SplashScreen