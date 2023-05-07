import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import LoanHomeScreen from '../screens/LoanHomeScreen';
import SavingHomeScreen from '../screens/SavingHomeScreen';
import NewLoanScreen from '../screens/NewLoanScreen';
// import JoinScreen from '../screens/JoinScreen';
import HomeOverViewScreen from '../screens/HomeOverViewScreen';
import { useMidasAuth } from '../AppStore/AuthorizationContext';


const Tab = createBottomTabNavigator();


const MidasTabStack = () => {
    const { userInfo, fetchUser } = useMidasAuth()
    let loanCount = ''
    if(userInfo.loanowner) {
        loanCount = userInfo.loanowner.filter(loan => loan.active === true) 
    }
  return (
    <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor:'#c70'
            // tabBarShowLabel:false
        }}
        >
            <Tab.Screen component={HomeOverViewScreen} name="Home" options={{
                tabBarIcon:({ color, size })=><Ionicons name="home-outline" color={color} size={size} />
            }} />

            <Tab.Screen component={LoanHomeScreen} name="Loans"
              options={{
                    tabBarBadge:loanCount.length,
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
{/*           
          <Tab.Screen component={JoinScreen} name="Join" options={{
                tabBarIcon:({ color, size })=><AntDesign name="adduser" color={color} size={size} />
                }}
            /> */}


        </Tab.Navigator>
  )
}

export default MidasTabStack