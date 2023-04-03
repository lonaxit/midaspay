
import { View, Text , TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'

import styles from './savingbal.style'




const SavingBalCard = () => {
  const [balance, setBalance] = useState(2001258)
  return (
<TouchableOpacity>
            <View style={styles.card}>
                            <Text style={styles.balance}>₦{balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                            <Text style={styles.label}>Available on your savings</Text>
            </View>
  </TouchableOpacity>
  )
}

export default SavingBalCard