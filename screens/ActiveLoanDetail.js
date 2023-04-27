import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import LoanSummary from '../components/LoanSummary'
import globalStyles from '../style/global.style'
import FlatListRenderItem from '../components/FlatListRenderItem'


const ActiveLoanDetail = ({route,navigation}) => {
    const [test, setTest] = useState(14414)
    const topTitle = 'Remaining Balance'
    
    const loanId = route.params?.loanId

    const [data, setData] = useState([
        { id: 1, name: 'Long Term Loan', deduction: 75000, amount: 2500000, description:'Feb IPPIPS Deduction, 23' },
        { id: 2, name: 'Short Term Loan', deduction: 45000, amount: 750000, description:'Feb IPPIPS Deduction, 23' },
        { id: 3, name: 'Fertilizer Loan', deduction: 25000, amount: 50000,description:'Feb IPPIPS Deduction, 23'},
        { id: 4, name: 'Christmas Package', deduction: 10000, amount: 150000,description:'Feb IPPIPS Deduction, 23' },
        { id: 5, name: 'Land Scheme', deduction: 200000, amount: 1800000,description:'Feb IPPIPS Deduction, 23' },
        { id: 6, name: 'Household Items', deduction: 14585, amount: 65000, description: 'Feb IPPIPS Deduction, 23' },
        { id: 7, name: 'Household Items', deduction: 14585, amount: 8000,description:'Feb IPPIPS Deduction, 23' },
    ])

const loanDetail = data.filter(item => item.id === loanId);
  return (
    <View style={globalStyles.rootContainer}>
          <LoanSummary amount={test} topTitle={topTitle}/>
          {/* output list of deductions for the loan */}

          <FlatList
                 data={loanDetail}
                  renderItem={({ item }) => (
                      <FlatListRenderItem
                          title={item.name}
                          description={item.description}
                          deduction={item.deduction}
                          totalamount={item.amount}
                        //   onPress={()=>handleActiveLoanNavigation(item.id)}
                      />  
                   )}
                   keyExtractor={(item) => item.id.toString()}
                   showsVerticalScrollIndicator={false}
            />        

    </View>
  )
}

export default ActiveLoanDetail