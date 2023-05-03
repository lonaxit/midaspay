import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen';



const Stack = createNativeStackNavigator();


const MidasSplashStack = () => {
  return (
<Stack.Navigator>      
 <Stack.Screen component={SplashScreen} name="splash screen" options={{
          headerShown:false
        }} />
    </Stack.Navigator>
  )
}

export default MidasSplashStack