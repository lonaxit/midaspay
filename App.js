
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppNav from './navigation/AppNav';
import { AuthorizationProvider } from './AppStore/AuthorizationContext';

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
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" barStyle="light-content" />
      <AuthorizationProvider>
        <AppNav />
      </AuthorizationProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
// //import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';

// //working from old branch
// import AppNav from './navigation/AppNav';

// import { AuthorizationProvider } from './AppStore/AuthorizationContext';


// export default function App() {
 

//     const [fontsLoaded] = useFonts({
//     'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//     'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
//     'nunito-medium': require('./assets/fonts/Nunito-Medium.ttf'),
//     'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
//     'nunito-extralight': require('./assets/fonts/Nunito-ExtraLight.ttf'),
//     'nunito-boldItalic': require('./assets/fonts/Nunito-BoldItalic.ttf'),
//     'nunito-mediumItalic': require('./assets/fonts/Nunito-MediumItalic.ttf'),
//     });
  
//   useEffect(() => {
//     async function prepare() {
//       await SplashScreen.preventAutoHideAsync()
//     }
//     prepare();
//   }, [])
  
//   if (!fontsLoaded) {
//     return undefined
//   } else {
//     SplashScreen.hideAsync()
//   }

//   // Authentication, if user logged in HomeStack is shown else show AuthStack
//   return (
//     <>
//     <StatusBar
//       backgroundColor="rgba(0, 0, 0, 0.2)"
//       barStyle="light-content"
//     />
//   <AuthorizationProvider>
//      <AppNav/>
// </AuthorizationProvider>
//   </>

    
//   );
// }



