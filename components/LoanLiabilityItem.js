import { View, Text, StyleSheet,Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'


const LoanLiabilityItem = ({onPress,balance,title,description,deduction,totalamount,loan_date}) => {
  
    return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.loanItemContainer}>
    <View style={{padding:4}}>
        <Text style={{ fontWeight: 'bold', color: 'black' ,fontSize:14, fontFamily:'nunito-medium' }}>{title}</Text>
        <Text style={{ color: 'black', fontSize:11 }}> ₦{parseFloat(deduction).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                    </Text>
        <Text style={{ color: 'black', fontSize:12,marginTop:8 }}> ₦{parseFloat(balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
      </Text>
    <Text style={styles.dateText}>
     {moment(loan_date).format('MMMM Do YYYY')}
    </Text>
    </View>
    
    <View style={{padding:4}}>
    <Text style={{ fontFamily:'nunito-regular', color: 'black', fontSize:12 }}>
    ₦{parseFloat(totalamount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
    </Text>
  </View>
      </View>
    </TouchableOpacity>
  )
}

export default LoanLiabilityItem

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
  dateText: {
    fontWeight: 'bold',
    color: '#FF5733',
    fontSize: 10,
    fontFamily: 'nunito-medium'
}
})