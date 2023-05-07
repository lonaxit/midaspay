import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment';

const SavingDetailItem = ({description,credit,debit,balance,transaction_date}) => {
  return (

                    <View style={styles.loanItemContainer}>
                    <View style={{ padding: 4 }}>
                
                        <Text style={{ fontWeight: 'bold', color: 'black' ,fontSize:14, fontFamily:'nunito-medium' }}>{description}</Text>
                        <Text style={{ color: 'black', fontSize:11 }}> ₦{credit? parseFloat(credit).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : parseFloat(debit).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              </Text>
              
                    <View style={styles.balanceWrapper}>
                        <Text style={{  color: 'black', fontWeight:'bold', fontSize:11 }}> ₦{parseFloat(balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </Text>
                        <Text style={styles.dateText}>{moment(transaction_date).format('MMMM Do YYYY')}</Text>
                </View>
                   
                    </View>
                    
                    {/* <View style={{padding:4}}>
                    <Text style={{ fontFamily:'nunito-regular', color: 'black', fontSize:12 }}>
                    ₦{parseFloat(balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    </Text>
                    </View> */}
                    
                      </View>
  
  )
}

export default SavingDetailItem

const styles = StyleSheet.create({
  loanItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius:4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: '#fff',
    marginBottom:8
    // borderBottomWidth:0.5
    },

    balanceWrapper: {
        marginTop: 12,

    },
    dateText: {
        fontWeight: 'bold',
        color: '#FF5733',
        fontSize: 10,
        fontFamily: 'nunito-medium'
    }
})