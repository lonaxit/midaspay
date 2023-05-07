import { View, Text, Pressable, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'


const LoanDetailSummaryCard = ({productName,balance, loanAmount, totalDeduction}) => {
 
  return (
    <View >
    <LinearGradient
      colors={['#000', '#fff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={styles.loanContainer}
      >
            
                <View>
                  <Text style={styles.boldText}>{productName}</Text>
                  <Text style={styles.principalAmount}>₦{parseFloat(loanAmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
              </View>
              
            <View>
              <Text style={styles.balanceRemainingText}>Remaining Balance</Text>
            </View>
        
            <View>
            <Text style={styles.balanceText}>₦{parseFloat(balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
            </View>

            <View>
                <Text style={styles.lightText}>Total Deductions</Text>
                  <Text style={styles.totalDeductionText}>₦{parseFloat(totalDeduction).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
            </View>
      
            
      </LinearGradient>

    </View>
  )
}

export default LoanDetailSummaryCard


const styles = StyleSheet.create({
    loanContainer: {
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        minHeight: 120,
       
      },
      balanceText: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
          textAlign: 'center',
    },
    totalDeductionText: {
        color: '#900C3F',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    balanceRemainingText: {
        fontSize:12,
        fontWeight: 'bold',
       textAlign: 'center',
        color: '#fff',
       marginTop:12
  },
    boldText: {
          fontSize:12,
          fontWeight: 'bold',
         textAlign: 'center',
         color: '#fff',
    },
    principalAmount: {
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    lightText: {
          fontSize:12,
          textAlign: 'center',
      fontWeight: '600',
      color: '#fff',
    },
})