import { View, Text, ActivityIndicator, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../contextAPI/AuthContext'




const SavingSummary = () => {
  const nav =  useNavigation()

  
  const { userData } = useAuth()
  // const [bal, setBal] = useState(525)

    // check for loading spinner
    if (!userData) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
      }
    
  return (
<Pressable android_ripple={{color:'#ccc'}} onPress={()=>nav.navigate('usersavingdetail',{userId:1})}>
        <View style={styles.card}>
              <Text style={styles.balance}>₦{userData.totalSaving.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
        <Text style={styles.label}>Available on your savings</Text>
      
        </View>
  </Pressable>
  )
}

export default SavingSummary

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        height:100,
        // styles for ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // for android
        elevation: 4,
      
      },
      balance: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
          marginBottom: 8,
        fontFamily:'nunito-bold'
      },
      label: {
        fontSize: 13,
        color: '#9B9B9B',
          textAlign: 'center',
        fontFamily:'nunito-medium'
    },
});