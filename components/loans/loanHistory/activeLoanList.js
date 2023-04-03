import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import LoanItem from "../loanitems/active/loanItem"

import styles from './activeloanlist.style'

const ActiveLoanList = () => {

    const navigation =  useNavigation()
    const [data, setData] = useState([
        { id: 1, name: 'Long Term Loan', deduction: 75000, amount: 2500000 },
        { id: 2, name: 'Short Term Loan', deduction: 45000, amount: 750000 },
        { id: 3, name: 'Fertilizer Loan', deduction: 25000, amount: 50000},
        { id: 4, name: 'Christmas Package', deduction: 10000, amount: 150000 },
        { id: 5, name: 'Land Scheme', deduction: 200000, amount: 1800000 },
        { id: 6, name: 'Household Items', deduction: 14585, amount: 65000 },
    ])

    const handleLoanPress = (item) => {
        setSelectedLoan(item);
        navigation.navigate('LoanDetail', { loan: item });
    };
    
    return (
        <View>
            <View style={styles.historyContainer}>
            <Text style={styles.historyText}>History</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('inactiveloans',{id:1})}>
                <Text style={styles.historyText}>Inactive </Text>
            </TouchableOpacity>
            </View>
            <View>
            <FlatList
            data={data}
            renderItem={({ item }) => (
            <LoanItem item={item} onPress={() => handleLoanPress(item)} />
                )}
            keyExtractor={(item) => item.id.toString()}
                // extraData={selectedLoan}
            showsVerticalScrollIndicator={false}
            />
            </View>
          
              
           
            
        </View>
  )
}

export default ActiveLoanList