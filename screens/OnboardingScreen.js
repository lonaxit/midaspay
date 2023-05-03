import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../contextAPI/AuthContext';

const OnboardingScreen = ({ navigation }) => {
  
  const { jwtToken } = useAuth()
  return (
    <SafeAreaView style={styles.parentContainer}>

    <View style={{marginTop:50}}>
        <Text style={styles.namePlate}>MIDAS-Mobile</Text>
        <Text>{jwtToken}</Text>
     
    </View>

    <View style={styles.welcomeImageWrapper}>
    <Image
    source={require('../assets/images/turing_partner.png')}
    style={styles.welcomeImage}
    />
    </View>
    
    <TouchableOpacity style={styles.welcomeBtn} onPress={()=>navigation.navigate('Login')}>
      <Text style={styles.welcomeBtnText}>Let's Begin</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="black" /> 
      </TouchableOpacity>
    
    
  </SafeAreaView>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    parentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
      namePlate: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#20315f',
      fontFamily:'nunito-bold'
    },
    welcomeImageWrapper: {
          flex: 1,
          justifyContent: 'center',
          alignItems:'center'
    },
    welcomeImage: {
          width: 250,
           height: 250,
          transform:[{rotate:'-15deg'}]
    },
      welcomeBtn: {
      backgroundColor: '#AD40AF',
      padding: 20,
      width: '90%',
      borderRadius: 5,
      flexDirection: 'row',
        justifyContent: 'space-between',
      marginBottom: 50
    },
    welcomeBtnText: {
      fontSize: 18,
      color: '#fff',
      fontFamily:'nunito-mediumItalic'
    },
  })
  