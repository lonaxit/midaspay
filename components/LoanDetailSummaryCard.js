import { View, Text, Pressable, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'


const LoanDetailSummaryCard = ({productName,balance, loanAmount, totalDeduction}) => {
 const title = 'Loan'
  return (
    <View >


      {/* new card */}
<View style={styles.card}>

{/* <Pressable onPress={()=>nav.navigate('usersavingdetail',{depositTotal:loanAmount})}> */}
    <View >
     <Text style={styles.savingText}>LOAN BALANCE</Text>
          <Text style={styles.balance}>₦{parseFloat(balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
          
    </View>
  {/* </Pressable> */}
  
  {/* <View style={styles.divider} /> */}

  <View style={styles.loanTitleContainer}>
          <Text style={styles.loanBalText}>{productName} </Text>
          <Text style={styles.loanBalText}>Total Deductions </Text>
  </View>
  
  <View style={styles.loanTitleContainer}>
  
  <Text style={styles.principalAmount}>₦{parseFloat(loanAmount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
         
    <Text style={styles.totalDeductionText}>₦{parseFloat(totalDeduction).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
  </View>

</View>
      

    {/* <LinearGradient
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
      
            
      </LinearGradient> */}

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
        color: '#27ae60',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
    },
    balanceRemainingText: {
        fontSize:12,
        fontWeight: 'bold',
       textAlign: 'center',
        color: 'black',
       marginTop:12
  },
    boldText: {
          fontSize:12,
          fontWeight: 'bold',
         textAlign: 'center',
         color: 'black',
    },
    principalAmount: {
        fontSize:14,
        // fontWeight: 'bold',
        textAlign: 'center',
        color: '#c0392b',
    },
    lightText: {
          fontSize:12,
          textAlign: 'center',
      fontWeight: '600',
      color: 'black',
  },
    // new container

  loanTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  balance: {
    fontSize: 30,
    fontWeight: 'bold',
    // textAlign: 'center',
      marginBottom: 8,
    fontFamily: 'nunito-bold',
    color:'red'
  },
//   savingText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'black',
//     // textAlign: 'center',
//     fontFamily:'nunito-medium'
// },
  
// divider: {
//   height: 1,
//   width: '100%',
//   backgroundColor: 'black',
//   marginBottom:10
//   },
  loanBalText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'nunito-medium',
    
  },


  loanBal: {
    fontSize: 14,
    //fontWeight: 'bold',
    fontFamily: 'nunito-medium',
    color: 'black',
    
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom:10,
    // height:100,
    // styles for ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    //for android
    elevation: 4,
  
},
})