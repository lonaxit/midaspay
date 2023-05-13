
import React from 'react'
import { View, Text, StyleSheet,FlatList,ActivityIndicator } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useMidasAuth } from '../AppStore/AuthorizationContext'
import Item from '../components/Item'

const InactiveLoanScreen = ({ route, navigation }) => {
  const { userInfo } = useMidasAuth()

  function handleActiveLoanNavigation(id) {
    navigation.navigate('activeloandetail',{loanId:id})
}

  // const navigation = useNavigation()
  //  const route = useRoute()
   
  
  // const { id } = route.params
  // changing title dynamically
  // navigation.setOptions({ title: id });
  let inactiveLoans = userInfo.loanowner.filter(item => item.active ===false)

  if (!userInfo.loanowner) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
    </View>
    )
}
  return (
    <View style={styles.rootContainer}>
    <View>
      <Text style={styles.title}>Paid Loans</Text>
      <View>
          <Text style={styles.totalTitle}>{inactiveLoans.length}</Text>
      </View>

     
      
    </View>
    
    <FlatList
               data={inactiveLoans}
                renderItem={({ item }) => (
                    <Item
                        title={item.product_name}
                        loan_date={item.start_date}
                        deduction={item.monthly_deduction}
                        totalamount={item.approved_amount}
                        onPress={()=>handleActiveLoanNavigation(item.id)}
                    />  
                 )}
                 keyExtractor={(item) => item.id.toString()}
                 showsVerticalScrollIndicator={false}
          />        
  </View>
  )
}

export default InactiveLoanScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop:30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor:'#fff'
  },
  title:{
    // marginBottom: 5,
    textAlign: 'center',
    fontSize: 32,
    fontWeight:'bold'
  },
  totalTitle: {
  
    color: '#95a5a6',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign:'center'
  },

})