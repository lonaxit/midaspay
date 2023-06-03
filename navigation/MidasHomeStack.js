
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
// import HomeOverViewScreen from '../screens/HomeOverViewScreen';
import SavingOverviewDetailScreen from '../screens/SavingOverviewDetailScreen';
import ActiveLoanDetail from '../screens/ActiveLoanDetail';
import InactiveLoanScreen from '../screens/InactiveLoanScreen';
import MidasTabStack from './MidasTabStack';
import ChangePassword from '../screens/ChangePassword';
import GuarantorScreen from '../screens/GuarantorScreen';




const Stack = createNativeStackNavigator();

const MidasHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      
      headerTitleAlign:'center',
      headerShadowVisible: false,
      headerTitleStyle: {
          fontFamily: 'nunito-regular',
          fontSize: 13,
         fontWeight:'bold'
      }
      }}>
          
      {/* <Stack.Screen component={HomeOverViewScreen} name="homeoverview" options={{
        title: 'Dashboard',
      }} /> */}
      
      <Stack.Screen component={MidasTabStack} name="Dashboard" options={{
        headerShown:false
      }}
      />
      <Stack.Screen component={SavingOverviewDetailScreen} name="usersavingdetail" options={{
        title:'Saving Details'
      }} />
      <Stack.Screen component={ActiveLoanDetail} name="loandetail" options={{
        title:'Loan Details'
      }}/>
      <Stack.Screen component={InactiveLoanScreen} name="inactiveloans"
        options={{
        title:'Inactive Loans'
        }} />
      
      <Stack.Screen component={ChangePassword} name="changepassword"
        options={{
        title:''
        }} />
       <Stack.Screen component={GuarantorScreen} name="guarantorscreen"
        options={{
        title:''
      }}/>
            
    </Stack.Navigator>
  )
}

export default MidasHomeStack