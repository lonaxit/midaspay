import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parentContainer}>

      <View style={{ marginTop: 50 }}>
        
      <View style={{alignItems:'center'}}>
        <Image source={require('../assets/images/logo.png')} style={[styles.logo]} resizeMode='contain' />
        </View>
        
      <Text style={styles.namePlate}>MIDAS TOUCH</Text>
     
    </View>

      <View style={styles.welcomeImageWrapper}>
        <View>
        <Text style={{ color: 'black', fontSize: 24, fontFamily:'nunito-bold', fontWeight:'bold'}}>
          Let's build something <Text style={{fontSize:26,color:'#C96D3C'}}>new</Text> together
          </Text>
          
          <Text style={{marginTop:10,fontFamily:'nunito-mediumItalic'}}>
            and leap into the future that's driven by technology, passion and creativity
          </Text>
        </View>
       
        
    {/* <Image
    source={require('../assets/images/turing_partner.png')}
    style={styles.welcomeImage}
    /> */}
    </View>
    
    <TouchableOpacity style={styles.welcomeBtn} onPress={()=>navigation.navigate('Login')}>
      <Text style={styles.welcomeBtnText}>Start Here</Text>
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
  logo:{
    width: '30%',
    maxWidth:300,
    maxHeight:300
  },
      namePlate: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#cf0420',
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
      backgroundColor: '#C96D3C',
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
  