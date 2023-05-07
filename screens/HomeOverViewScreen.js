import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import OverviewWelcomeHeader from '../components/OverviewWelcomeHeader'
import SavingSummary from '../components/SavingSummary'
import LoanSummary from '../components/LoanSummary'
import SectionHeader from '../components/SectionHeader'
import FlatListRenderItem from '../components/FlatListRenderItem'
import { useMidasAuth } from '../AppStore/AuthorizationContext'




const HomeOverViewScreen = ({ navigation }) => {
  
    const { logout,userInfo,fetchUser } = useMidasAuth()



    useEffect(() => {
        fetchUser()
    },[])


    function handleActiveLoanNavigation(id) {
        navigation.navigate('activeloandetail',{loanId:id})
    }

    function handleInactiveLoanNavigation() {
        navigation.navigate('inactiveloans')
    }

    const topTitle = 'The figure below is a snapshot of your total indebtedness to MIDAS Touch'
    const bottomTitle = 'Remaining on your loan ledger'

    
    
    if (!userInfo.loanowner) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
    }
    
    let activeLoans = userInfo.loanowner.filter(loan => loan.active === true)

    // sum total loan balance
    
const totalBalance = activeLoans.reduce((accumulator, record) => accumulator + record.  total_balance, 0);

    return (

        
<SafeAreaView style={styles.rootContainer}>
            
{/* <OverviewWelcomeHeader onPress={logout} /> */}
<OverviewWelcomeHeader onPress={logout} /> 
        <SavingSummary totalsaving={userInfo.totalSaving} />
        
<LoanSummary amount={totalBalance} topTitle={topTitle} bottomTitle={bottomTitle}/>

<SectionHeader onPress={handleInactiveLoanNavigation}/>

       
               <FlatList
                 data={activeLoans}
                  renderItem={({ item }) => (
                      <FlatListRenderItem
                          title={item.product_name}
                        //   description={item.description}
                          deduction={item.monthly_deduction}
                          totalamount={item.approved_amount}
                          onPress={()=>handleActiveLoanNavigation(item.id)}
                      />  
                   )}
                   keyExtractor={(item) => item.id.toString()}
                   showsVerticalScrollIndicator={false}
            />        
  </SafeAreaView>
  
  )
}

export default HomeOverViewScreen

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1,
        // copied styles
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop:30,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor:'#fff '
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