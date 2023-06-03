import { View, Text,SafeAreaView, StyleSheet,TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React,{ useEffect}  from 'react'
import { useMidasAuth } from '../AppStore/AuthorizationContext';
import Spinner from 'react-native-loading-spinner-overlay';
import LoanLiabilityItem from '../components/LoanLiabilityItem';


const GuarantorScreen = ({navigation,route}) => {


    const { userInfo,isLoadingLoans,guarantorLoans,fetchLoansByGuarantor } = useMidasAuth()
    const data = route.params.data

    function handleActiveLoanNavigation(id) {
        navigation.navigate('loandetail',{loanId:id})
    }

    if (!data) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large'  color='#C96D3C'/>
        </View>
        )
    }
   

    const liability = data.reduce((accumulator, record) => accumulator + record.total_balance, 0);
    
    function handleActiveLoanNavigation(id) {
        navigation.navigate('activeloandetail',{loanId:id})
    }
    
    return (
        <SafeAreaView style={styles.rootContainer}>
       <Spinner visible={ isLoadingLoans }/>
        <View style={styles.container}>
                <Text style={{ color: '#99a3a4', fontSize: 16, marginBottom:10, fontWeight:'bold' }}>First Guarantor Liability</Text>
                <Text style={{fontSize:32,color:'#ca070a', fontFamily:'nunito-bold'}}>₦{parseFloat(liability).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
       
            </View> 

            <Text>Available Loans</Text>

            
        <FlatList
               data={data}
                renderItem={({ item }) => (
                    <LoanLiabilityItem
                        title={item.loan_owner}
                        loan_date={item.start_date}
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

export default GuarantorScreen

const styles = StyleSheet.create({

    guaranteeCount: {
        color: '#a6acaf',
        fontSize: 20,
     fontFamily:'nunito-boldItalic'
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
        paddingTop:30,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        // marginTop:50
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
  

  
})