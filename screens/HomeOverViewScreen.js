import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground, SafeAreaView, FlatList } from 'react-native'
import OverviewWelcomeHeader from '../components/OverviewWelcomeHeader'
import SavingSummary from '../components/SavingSummary'
import LoanSummary from '../components/LoanSummary'
import SectionHeader from '../components/SectionHeader'
import Item from '../components/Item'
import FlatListRenderItem from '../components/FlatListRenderItem'




const HomeOverViewScreen = ({ navigation }) => {

    // const { logout } = useMaxAuth()

    const [bal, setBal] = useState(2154)
    
    const [data, setData] = useState([
        { id: 1, name: 'Long Term Loan', deduction: 75000, amount: 2500000, description:'Feb IPPIPS Deduction, 23' },
        { id: 2, name: 'Short Term Loan', deduction: 45000, amount: 750000, description:'Feb IPPIPS Deduction, 23' },
        { id: 3, name: 'Fertilizer Loan', deduction: 25000, amount: 50000,description:'Feb IPPIPS Deduction, 23'},
        { id: 4, name: 'Christmas Package', deduction: 10000, amount: 150000,description:'Feb IPPIPS Deduction, 23' },
        { id: 5, name: 'Land Scheme', deduction: 200000, amount: 1800000,description:'Feb IPPIPS Deduction, 23' },
        { id: 6, name: 'Household Items', deduction: 14585, amount: 65000, description: 'Feb IPPIPS Deduction, 23' },
        { id: 7, name: 'Household Items', deduction: 14585, amount: 8000,description:'Feb IPPIPS Deduction, 23' },
    ])


    function signOut() {
        // logout()
    }

    function handleActiveLoanNavigation(id) {
        navigation.navigate('activeloandetail',{loanId:id})
    }

    function handleInactiveLoanNavigation() {
        navigation.navigate('inactiveloans')
    }

    
    const topTitle = 'The figure below is a snapshot of your total indebtedness to MIDAS Touch'
    const bottomTitle ='Remaining on your loan ledger'

    return (

        
<SafeAreaView style={styles.rootContainer}>
            
{/* <OverviewWelcomeHeader onPress={logout} /> */}
<OverviewWelcomeHeader onPress={signOut} /> 
<SavingSummary />
<LoanSummary amount={bal} topTitle={topTitle} bottomTitle={bottomTitle}/>

<SectionHeader onPress={handleInactiveLoanNavigation}/>

       
               <FlatList
                 data={data}
                  renderItem={({ item }) => (
                      <FlatListRenderItem
                          title={item.name}
                          description={item.description}
                          deduction={item.deduction}
                          totalamount={item.amount}
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