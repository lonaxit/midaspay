import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
//import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigation/HomeStack';
import AuthStack from './navigation/AuthStack';




export default function App() {

    const [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'nunito-medium': require('./assets/fonts/Nunito-Medium.ttf'),
    'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
    'nunito-extralight': require('./assets/fonts/Nunito-ExtraLight.ttf'),
    'nunito-boldItalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
    'nunito-mediumItalic': require('./assets/fonts/Nunito-MediumItalic.ttf'),
    });
  
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare();
  }, [])
  
  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
  
    <NavigationContainer>
    <StatusBar backgroundColor="#ffffff"/>
    {/* <HomeStack/> */}
    <AuthStack/>
   </NavigationContainer>
   
  );
}



