import { View, Text, Pressable, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'


const LoanSummary = ({amount,topTitle,bottomTitle}) => {
 
  return (
    <Pressable >
    <LinearGradient
      colors={['#CD5C5C', '#CD5C5C']}
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

        <View>
          <Text style={styles.lightText}>{bottomTitle}</Text>
      
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
    boldText: {
          fontSize:12,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#fff',
      },
    lightText: {
          fontSize:14,
          textAlign: 'center',
          fontWeight: '600',
          color: '#fff',
    },
})