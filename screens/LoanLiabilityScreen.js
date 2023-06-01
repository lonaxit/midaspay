import { View, Text,SafeAreaView, StyleSheet,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'


const LoanLiabilityScreen = ({navigation}) => {

    const amount = 457554
    return (
      
        <SafeAreaView style={styles.rootContainer}>
        <View>
                <Text style={{ color: '#b2babb', fontSize: 18, marginBottom:10 }}>Total Liability</Text>
                <Text style={{fontSize:20,color:'black', fontFamily:'nunito-bold'}}>₦{parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
        {/* <OverviewWelcomeHeader onPress={logout} />  */}
        {/* <SavingSummary title={title} totalsaving={userInfo.totalSaving} loanBal={totalBalance} /> */}
    
        {/* <LoanSummary amount={totalBalance} bottomTitle={bottomTitle}/> */}

        {/* <SectionHeader onPress={handleInactiveLoanNavigation} leftText={leftText}/>         */}
        </View>        
{/* <OverviewWelcomeHeader onPress={logout} /> */}


{/* <FlatList
        data={savingInfo.slice(0,4)}
                  renderItem={({ item }) => (
                    <SavingDetailItem
                      credit={item.credit}
                      description={item.narration}
                      debit={item.debit}
                          balance={item.balance}
                          transaction_date={item.transaction_date}
                  />
                  )}
            
        keyExtractor={(item) => item.id.toString()}
            // extraData={selectedLoan}
        showsVerticalScrollIndicator={false}
        /> */}

           {/* <FlatList
             data={activeLoans}
              renderItem={({ item }) => (
                  <FlatListRenderItem
                      title={item.product_name}
                    loan_date={item.start_date}
                      deduction={item.monthly_deduction}
                      totalamount={item.approved_amount}
                      onPress={()=>handleActiveLoanNavigation(item.id)}
                  />  
               )}
               keyExtractor={(item) => item.id.toString()}
               showsVerticalScrollIndicator={false}
        />         */}
</SafeAreaView>
  )
}

export default LoanLiabilityScreen

const styles = StyleSheet.create({

    upperSection: {
        backgroundColor: '#239b56',
        padding: 10,
        marginBottom: 10,
        borderRadius:10
    },
    descriptionText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 18,
        marginBottom:12
      },

    rootContainer: {
        flex: 1,
        // copied styles
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop:30,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        marginTop:50
    },
    card: {
        width: '90%',
        height: 100,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
    list: {
        width: '90%',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    // container: {
       
    //     paddingTop:30,
    //     paddingRight: 20,
    //     paddingLeft: 20,
    //     flex: 1,
    //     backgroundColor: '#fff',
    // },

  
})