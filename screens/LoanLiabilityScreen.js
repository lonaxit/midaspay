import { View, Text,SafeAreaView, StyleSheet,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React,{ useEffect}  from 'react'
import { useMidasAuth } from '../AppStore/AuthorizationContext';
import Spinner from 'react-native-loading-spinner-overlay';

const LoanLiabilityScreen = ({navigation}) => {


    const { userInfo,isLoadingLoans,guarantorLoans,fetchLoansByGuarantor } = useMidasAuth()
    

    useEffect(() => {
        fetchLoansByGuarantor(userInfo.id)
    }, [])

    if (!guarantorLoans) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large'  color='#C96D3C'/>
        </View>
        )
    }
    let guarantor_one_loans = guarantorLoans.filter(loan => loan.guarantor_one === userInfo.id)
    let guarantor_two_loans = guarantorLoans.filter(loan => loan.guarantor_two === userInfo.id)

    const totalLiability = guarantorLoans.reduce((accumulator, record) => accumulator + record.total_balance, 0);
    
    const firstGuarantorLiability = guarantor_one_loans.reduce((accumulator, record) => accumulator + record.total_balance, 0);
    
    const secondGuarantorLiability = guarantor_two_loans.reduce((accumulator, record) => accumulator + record.total_balance, 0);
    
    return (
      
        <SafeAreaView style={styles.rootContainer}>
       <Spinner visible={ isLoadingLoans }/>
        <View style={styles.container}>
                <Text style={{ color: '#99a3a4', fontSize: 18, marginBottom:10, fontWeight:'bold' }}>Total Liability</Text>
                <Text style={{fontSize:32,color:'#ca070a', fontFamily:'nunito-bold'}}>₦{parseFloat(totalLiability).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
       
        </View> 

            
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('guarantorscreen', { data:  guarantor_one_loans,description:'First Guarantee Liability'})}>
                <Text>First Guarantees</Text>
        <View >
        <Text style={styles.guaranteeCount}>{guarantor_one_loans.length}</Text>
              <Text style={styles.balance}>₦{parseFloat(firstGuarantorLiability).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
              
        </View>
         </TouchableOpacity>
      
      {/* <View style={styles.divider} /> */}

      {/* <View style={styles.loanBalContainer}>
        <Text style={styles.loanBalText}>{title} </Text>
        { loanBal &&    <Pressable  onPress={() => nav.navigate('Loans')}>
        <Text style={styles.loanBal}>₦{parseFloat(loanBal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
        </Pressable>
        } 
        </View> */}

            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('guarantorscreen', { data: guarantor_two_loans,description:'Second Guarantee Liability' })}>
            <Text>Second Guarantees</Text>
    <View >
     <Text style={styles.guaranteeCount}>{guarantor_two_loans.length}</Text>
    <Text style={styles.balance}>₦{parseFloat(secondGuarantorLiability).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
    </Text>
    </View>
</TouchableOpacity>
  
</SafeAreaView>
  )
}

export default LoanLiabilityScreen

const styles = StyleSheet.create({

    guaranteeCount: {
        color: '#a6acaf',
        fontSize: 20,
     fontFamily:'nunito-boldItalic'
    },
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
    
    container: {
        width: '100%',
        height: 120,
        borderBottomWidth: 2,
        borderBottomColor: '#ebedef',
        marginBottom: 10,
        padding:10
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
        width: '100%',
        height: 100,
        marginVertical: 10,
        // borderRadius: 10,
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
    balance: {
        fontSize: 18,
        fontWeight: 'bold',
        // textAlign: 'center',
          marginBottom: 8,
        fontFamily: 'nunito-bold',
        // color:'#1D5330'
        color:'#d98880'
      },
      savingText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#239b56',
        // textAlign: 'center',
        fontFamily:'nunito-medium'
  },
    // container: {
       
    //     paddingTop:30,
    //     paddingRight: 20,
    //     paddingLeft: 20,
    //     flex: 1,
    //     backgroundColor: '#fff',
    // },

  
})