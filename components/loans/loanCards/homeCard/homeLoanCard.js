
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'


// for loan card
// import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './homeloancard.style'


const HomeLoanCard = () => {
  const [balance, setBalance] = useState(2001258)

  
  return (
    <TouchableOpacity >
    <LinearGradient
      colors={['#000', '#fff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={styles.loanContainer}
      >
            
            <View>
              <Text style={styles.lightText}>The figure below is a snapshot of your total indebtedness to MIDAS Touch</Text>
        </View>
        
        <View>
            <Text style={styles.balanceText}>₦{balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
        </View>

        <View>
          <Text style={styles.lightText}>Remaining on your loan ledger</Text>
      
            </View>
            
      </LinearGradient>

    </TouchableOpacity>
  )
}

export default HomeLoanCard