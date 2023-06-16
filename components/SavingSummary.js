import { View, Text, ActivityIndicator, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'




const SavingSummary = ({ title,totalsaving, loanBal }) => {
  const noValue = 0
  const nav =  useNavigation()
const [balance,setBalance] = useState(142587)

    // check for loading spinner
    if (!balance) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
      }
    
  return (

    <View style={styles.card}>

    <Pressable onPress={()=>nav.navigate('usersavingdetail',{depositTotal:totalsaving})}>
        <View >
         <Text style={styles.savingText}>SAVINGS</Text>
              <Text style={styles.balance}>₦{parseFloat(totalsaving).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
              
        </View>
      </Pressable>
      
      {/* <View style={styles.divider} /> */}

      <View style={styles.loanBalContainer}>
        <Text style={styles.loanBalText}>{title} </Text>
        {loanBal ? (
          <Pressable onPress={() => nav.navigate('Loans')}>
        <Text style={styles.loanBal}>₦{parseFloat(loanBal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
        </Pressable>
        ):  <Text style={styles.loanBal}>₦{parseFloat(noValue).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text> } 
        </View>

    </View>

  )
}

export default SavingSummary

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        // height:100,
        // styles for ios
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        // for android
        elevation: 20,
      
  },
  
      balance: {
        fontSize: 32,
        fontWeight: 'bold',
        // textAlign: 'center',
          marginBottom: 8,
        fontFamily: 'nunito-bold',
        // color:'#1D5330'
        color:'#239b56'
      },
      savingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#239b56',
        // textAlign: 'center',
        fontFamily:'nunito-medium'
  },
      
    divider: {
      height: 1,
      width: '100%',
      backgroundColor: 'black',
      marginBottom:10
  },
  loanBalContainer: {
    flexDirection: 'row'
  },

  loanBalText: {
    fontSize: 14,
    color: 'black',
    fontWeight:'bold',
    fontFamily: 'nunito-medium',
    marginRight:10
  },

  loanBal: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'nunito-medium',
    color:'red'
  }
  
});