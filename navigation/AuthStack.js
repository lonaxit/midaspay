import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import InactiveLoanScreen from '../screens/InactiveLoanScreen';
import JoinScreen from '../screens/JoinScreen';





const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen component={OnboardingScreen} name="Onboarding"/>
    <Stack.Screen component={LoginScreen} name="Login" />
    <Stack.Screen component={JoinScreen} name="newmembership" options={{headerShown:true}}/>
    </Stack.Navigator>
  )
}

export default AuthStack