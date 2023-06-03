import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import OverviewWelcomeHeader from '../components/OverviewWelcomeHeader'
import SavingSummary from '../components/SavingSummary'
import LoanSummary from '../components/LoanSummary'
import SectionHeader from '../components/SectionHeader'
import FlatListRenderItem from '../components/FlatListRenderItem'
import { useMidasAuth } from '../AppStore/AuthorizationContext'
import SavingDetailItem from '../components/SavingDetailItem'


const HomeOverViewScreen = ({ navigation }) => {
  
    const { logout, userInfo, fetchUser } = useMidasAuth()
    
    // 
    const {savingInfo, savingList,isFetchingSaving} = useMidasAuth()
    
    

    useEffect(() => {
        savingList()
    }, [])

    useEffect(() => {
        fetchUser()
    }, [])
    

    if (isFetchingSaving) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
    }



 


    function handleActiveLoanNavigation(id) {
        navigation.navigate('activeloandetail',{loanId:id})
    }

    function handleInactiveLoanNavigation() {
        navigation.navigate('inactiveloans')
    }

    // const topTitle = 'The figure below is a snapshot of your total indebtedness to MIDAS Touch'
    const bottomTitle = 'Remaining on your loan ledger'
    const leftText = 'Previous Deductions'
    const title ='Loan Bal:'
    
    
    if (!userInfo.loanowner) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large' color='#C96D3C' />
        </View>
        )
    }
    
let activeLoans = userInfo.loanowner.filter(loan => loan.active === true)

    // sum total loan balance
    
const totalBalance = activeLoans.reduce((accumulator, record) => accumulator + record.  total_balance, 0);

    return (

        
<SafeAreaView style={styles.rootContainer}>
            <View style={styles.upperSection}>
                
            <OverviewWelcomeHeader onPress={logout} /> 
            <SavingSummary title={title} totalsaving={userInfo.totalSaving} loanBal={totalBalance} />
        
            {/* <LoanSummary amount={totalBalance} bottomTitle={bottomTitle}/> */}

            {/* <SectionHeader onPress={handleInactiveLoanNavigation} leftText={leftText}/>         */}
            <Text style={styles.descriptionText}>Previous Deductions</Text>
            </View>        
{/* <OverviewWelcomeHeader onPress={logout} /> */}


<FlatList
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
            />

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

export default HomeOverViewScreen

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