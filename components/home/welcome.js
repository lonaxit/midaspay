import React, { useState } from 'react'
import {  StyleSheet } from 'react-native'

import { SafeAreaView, ScrollView, View } from 'react-native'


// for loan card
// import { useNavigation } from '@react-navigation/native';

import SavingBalCard from '../savings/savingCards/SavingBalCard';
import HomeLoanCard from '../loans/loanCards/homeCard/homeLoanCard';
import ActiveLoanList from '../loans/loanHistory/activeLoanList';
import WelcomeHeader from '../common/headers/welcome/welcomeHeader';



const Welcome = () => {
    
  

    // For loan card
    // const navigation = useNavigation();

//   const handlePress = () => {
    // navigation.navigate('ActiveLoansScreen');
    // };
    
  return (
      <SafeAreaView style={styles.container}>
        
          <WelcomeHeader/>
              {/* <View style={styles.welcomeHeader}>
                  <Text>Hello Luper</Text>
                  <ImageBackground
                      source={require('../../assets/images/bye.png')}
                      style={{ width: 35, height: 35 }}
                      imageStyle={{borderRadius:25}}
                  />
              </View> */}

              <SavingBalCard/>
            
              <HomeLoanCard />
         
                <View style={{flex:1}}>
                <ActiveLoanList />
                </View>
          
    </SafeAreaView>
  )
}

export default  Welcome 


const styles = StyleSheet.create({
    container: {
       
        paddingTop:60,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1,
        backgroundColor:'#fff'
    },
  

   
 
})