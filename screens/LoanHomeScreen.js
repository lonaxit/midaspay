import React from 'react'
import { View, Text, StyleSheet,FlatList, ActivityIndicator } from 'react-native'
import { useMidasAuth } from '../AppStore/AuthorizationContext'
import Item from '../components/Item'

const LoanHomeScreen = ({navigation}) => {

  const { userInfo } = useMidasAuth()

  function handleActiveLoanNavigation(id) {
    navigation.navigate('activeloandetail',{loanId:id})
}

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
        <Text style={styles.title}>All Loans</Text>
        <View>
            <Text style={styles.totalTitle}>{userInfo.loanowner.length}</Text>
        </View>

       
        
      </View>
      
      <FlatList
                 data={userInfo.loanowner}
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

export default LoanHomeScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop:30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    marginTop:50
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