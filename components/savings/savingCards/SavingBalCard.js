
import { View, Text , TouchableOpacity, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './savingbal.style'
import { BASE_URL_AUTH } from '../../../config'
import axios from 'axios'

import { ActivityIndicator } from 'react-native';

 

const SavingBalCard = ({route}) => {






  // if (!userData) {
  //   return (
  //     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size={'large'} />
  //   </View>
  //   )
  // }

  return (
<TouchableOpacity>
        <View style={styles.card}>
              <Text style={styles.balance}>₦{userData.totalSaving.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
              <Text style={styles.label}>Available on your savings</Text>
        </View>
  </TouchableOpacity>
  )
}

export default SavingBalCard