import React, { useState ,useEffect} from 'react'
import { View,  StyleSheet, SafeAreaView, FlatList, ActivityIndicator, Text,Pressable } from 'react-native'
import OverviewWelcomeHeader from '../components/OverviewWelcomeHeader'
import SavingSummary from '../components/SavingSummary'
import LoanSummary from '../components/LoanSummary'
import SectionHeader from '../components/SectionHeader'
import Item from '../components/Item'
import FlatListRenderItem from '../components/FlatListRenderItem'
import { useAuth } from '../contextAPI/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay'



const HomeOverViewScreen = ({ navigation }) => {
const [bal,setBal] = useState(25452)
const { isLoading, logout,userData,fetchProfile,myLoans,loans,jwtToken } = useAuth()

   
const [data, setUsers] = useState([
    {id:1, name: 'John', amount: 2500, deduction:2310 },

]);

    function handleInactiveLoanNavigation() {
        navigation.navigate('inactiveloans')
    }

    const handleActiveLoanNavigation = loan => {
        navigation.navigate('activeloandetail',{loanId:loan.id})
    };
    

    // useEffect(() => {
    //     fetchProfile()
    // },[])

    const userLoans = userData.loanowner

    const filteredLoans = userLoans.filter(item => item.active === true)

    const totalBalance = filteredLoans.reduce((accumulator, record) => accumulator + record.total_balance, 0);
    
    const topTitle = 'The figure below is a snapshot of your total indebtedness to MIDAS Touch'
    const bottomTitle = 'Remaining on your loan ledger'

     // check for loading spinner
     if (!userData) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
    }

    return (     
<SafeAreaView style={styles.rootContainer}>
            
{/* <OverviewWelcomeHeader onPress={logout} /> */}
{/* <Spinner visible={isLoading} /> */}


            
<OverviewWelcomeHeader onPress={logout} /> 
<SavingSummary />
<LoanSummary amount={totalBalance} topTitle={topTitle} bottomTitle={bottomTitle}/>

<SectionHeader onPress={handleInactiveLoanNavigation}/>

        
             <FlatList
                 data={filteredLoans}
                  renderItem={({ item }) => (
                      <FlatListRenderItem
                          title={item.product_name}
                          deduction={item.monthly_deduction}
                          totalamount={item.approved_amount}
                          onPress={()=>handleActiveLoanNavigation(item)}
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
      loanItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius:4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2,
        backgroundColor: '#fff',
        marginBottom:8,
    }

  
})