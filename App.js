import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
//import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// import { AuthProvider } from './Context/AuthContext';

import AppNav from './navigation/AppNav';
import { AuthenticationProvider } from './Context/Authentication';




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

  // Authentication, if user logged in HomeStack is shown else show AuthStack
  return (
  // <AuthProvider>
  //  <AppNav/>
  //  </AuthProvider>
    
    <AuthenticationProvider>
    <AppNav/>
   </AuthenticationProvider>
   
   
  );
}



