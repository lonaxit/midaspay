import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './loanitem.style';

// const LoanItem = ({ item, onPress }) => {
const LoanItem = ({ item, handleLoanPress }) => {
  const [loan, setLoan] = useState(20451)
  const [name, setName] =useState('Long Term Loan')
  return (
    // <TouchableOpacity onPress={onPress}>

    <TouchableOpacity >
      <View style={styles.loanItemContainer}>
        <View>
          <Text style={{ fontWeight: 'bold', color: 'black' ,fontSize:14, fontFamily:'nunito-medium' }}>{item.name}</Text>
          <Text style={{ color: 'black', fontSize:11 }}>Monthly Deduction: ₦{item.deduction.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </Text>
        </View>
      
      <View>
        <Text style={{ fontFamily:'nunito-regular', color: 'black', fontSize:12 }}>
        ₦{item.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </Text>
      </View>
       
    </View>
      </TouchableOpacity>

    
  )
}

export default LoanItem