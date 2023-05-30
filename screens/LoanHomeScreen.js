import React from 'react'
import { View, Text, StyleSheet,FlatList, ActivityIndicator } from 'react-native'
import { useMidasAuth } from '../AppStore/AuthorizationContext'
import Item from '../components/Item'
import LoanSummary from '../components/LoanSummary'
import SectionHeader from '../components/SectionHeader'

const LoanHomeScreen = ({navigation, route}) => {


  // const loanBalance = route.params.loanBalance
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
  
  let activeLoans = userInfo.loanowner.filter(loan => loan.active === true)

  const loanBalance = activeLoans.reduce((accumulator, record) => accumulator + record.  total_balance, 0);

  const bottomTitle = 'Remaining on your loan ledger'
  const topTitle = 'TOTAL LOAN BALANCE'
  const leftText ='ACTIVE LOANS'
  return (
    <View style={styles.rootContainer}>
      {/* <View>
        <Text style={styles.title}>All Loans {loanBalance}</Text>
        <View>
            <Text style={styles.totalTitle}>{userInfo.loanowner.length}</Text>
        </View>
      </View> */}
      
      <LoanSummary amount={loanBalance} bottomTitle={bottomTitle} topTitle={topTitle}/> 
      <SectionHeader leftText={leftText}/>
      <FlatList
                 data={activeLoans}
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
    paddingTop:10,
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