import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewLoanScreen from '../screens/NewLoan';
import SavingHomeScreen from '../screens/SavingHome'
import LoanHomeScreen from '../screens/LoanHome'
import InactiveLoanScreen from '../screens/InactiveLoanScreen'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AuthStack from './AuthStack';



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


const AppStack = () => {
    return (
      <Stack.Navigator>
            <Stack.Screen component={HomeScreen} name="Abode" options={{
                headerShown:false
            }}
            />
            <Stack.Screen component={InactiveLoanScreen} name="inactiveloans" options={{
                
                headerTitleAlign:'center',
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontFamily: 'nunito-regular',
                    fontSize: 13,
                    fontWeight: 'bold',
                  },
            }}
            />
       
    </Stack.Navigator>
    )
  }
  
 

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor:'#c70'
            // tabBarShowLabel:false
        }}
        >
            <Tab.Screen component={AppStack} name="Crib" options={{
                tabBarIcon:({ color, size })=><Ionicons name="home-outline" color={color} size={size} />
            }} />

            <Tab.Screen component={LoanHomeScreen} name="Loans"
                options={{
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {
                        backgroundColor:'#bb6b5a'
                    },
                tabBarIcon:({ color, size })=><AntDesign name="minuscircleo" color={color} size={size} />
            }}
            />

            <Tab.Screen component={SavingHomeScreen} name="Vault"
                options={{
                 tabBarIcon:({ color, size })=><Feather name="shopping-bag" color={color} size={size} />
                }}
            />

            <Tab.Screen component={NewLoanScreen} name="Apply" options={{
                tabBarIcon:({ color, size })=><AntDesign name="plus" color={color} size={size} />
            }}
            />


        </Tab.Navigator>
    )
}

export default TabNavigator