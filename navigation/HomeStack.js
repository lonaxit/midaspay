import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from '../screens/HomeScreen'; replaced by TabNavigator
import ProfileScreen from '../screens/ProfileScreen';
import NewLoanScreen from '../screens/NewLoanScreen';

import CustomDrawer from '../components/route/CustomDrawer'
import { Ionicons } from '@expo/vector-icons';


// import Tab navigator
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();


const HomeStack = () => {
  return (

    // Stack navigator code

  //   <Stack.Navigator>
     
  //     <Stack.Screen component={HomeScreen} name="Home"
  //       options={{
  //       title:'ACCOUNTS',
  //       headerTitleAlign:'center',
  //       headerShadowVisible: false,
  //       headerTitleStyle: {
  //           fontFamily: 'nunito-regular',
  //           fontSize: 13,
  //          fontWeight:'bold'
  //       }
  //   }}/>

  // </Stack.Navigator>

    
    // drawer navigation
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        headerShown:false,
        drawerLabelStyle: {
        marginLeft: -25,
          fontFamily: 'nunito-regular',
        }
        
      }}>
     
      <Drawer.Screen component={TabNavigator} name="Home"
        options={{
          title:'ACCOUNTS',
          headerTitleAlign:'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'nunito-regular',
            fontSize: 13,
            fontWeight: 'bold',
          },
          drawerIcon: () => (
            <Ionicons name="home-outline" size={22} color="black" />
            )
        }} />
      
      <Drawer.Screen component={ProfileScreen} name="Profile"
        options={{
        title:'PROFILE',
        headerTitleAlign:'center',
        headerShadowVisible: false,
        headerTitleStyle: {
            fontFamily: 'nunito-regular',
            fontSize: 13,
          fontWeight: 'bold',
          },
          drawerIcon: () => (
            <Ionicons name="person-outline" size={22} color="black" />
            )
        }} />
      
      <Drawer.Screen component={NewLoanScreen} name="NewLoan"
        options={{
        title:'NEW LOAN',
        headerTitleAlign:'center',
        headerShadowVisible: false,
        headerTitleStyle: {
            fontFamily: 'nunito-regular',
            fontSize: 13,
          fontWeight: 'bold',
          },
        drawerIcon: () => (
            <Ionicons name="md-bandage-outline" size={22} color="black" />
        )
    }}/>

  </Drawer.Navigator>
  )
}

export default HomeStack