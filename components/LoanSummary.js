import { View, Text, Pressable, StyleSheet,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { useMidasAuth } from '../AppStore/AuthorizationContext'
import { useNavigation } from '@react-navigation/native'

const LoanSummary = ({ amount, topTitle, bottomTitle }) => {
  const nav =  useNavigation()
  const { logout, userInfo, fetchUser } = useMidasAuth()

  if (!userInfo.loanowner) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
    </View>
    )
}

  let activeLoans = userInfo.loanowner.filter(loan => loan.active === true)
  let inactiveLoans = userInfo.loanowner.filter(loan => loan.active === false)
 
  return (
    <Pressable >
    <LinearGradient
      colors={['#C96D3C', '#C96D3C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.loanContainer}
      >
            
            <View>
              <Text style={styles.boldText}>{topTitle}</Text>
        </View>
        
        <View>
            <Text style={styles.balanceText}>₦{parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
        </View>

        {/* <View>
          <Text style={styles.lightText}>{bottomTitle}</Text>
      
        </View> */}

        <View style={styles.analysisContainer}>
          <Text style={styles.lightText}>Active</Text>
          <Text style={styles.lightText}>Inactive</Text>
        </View>
        <View style={styles.analysisContainer}>
          <Text style={{color:'#fff', fontSize:18}}>{activeLoans.length}</Text>
          <TouchableOpacity style={styles.welcomeBtn} onPress={()=>nav.navigate('inactiveloans')}>
            {/* <Text style={styles.welcomeBtnText}>Let's Begin</Text> */}
            <Text style={styles.inactiveText}>{inactiveLoans.length}</Text>
          </TouchableOpacity>
       
        </View>
            
      </LinearGradient>

    </Pressable>
  )
}

export default LoanSummary


const styles = StyleSheet.create({
    loanContainer: {
        borderRadius: 8,
        padding: 16,
        // alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        minHeight: 120,
       
      },
      balanceText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom:11
      },
    boldText: {
          fontSize:12,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#fff',
  },
  inactiveText: {
    fontSize:14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
    lightText: {
          fontSize:14,
          textAlign: 'center',
          fontWeight: '700',
          color: '#fff',
    },

  analysisContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  welcomeBtn: {
    backgroundColor: '#ff8442',
    padding: 5,
    width: '17%',
    borderRadius: 5,
    // flexDirection: 'row',
    //   justifyContent: 'space-between',
    // marginBottom: 50
  }
})