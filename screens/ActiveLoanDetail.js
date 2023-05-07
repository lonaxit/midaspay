import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoanSummary from '../components/LoanSummary'
import globalStyles from '../style/global.style'
import FlatListRenderItem from '../components/FlatListRenderItem'
import DeductionItem from '../components/DeductionItem'
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay'
import { useMidasAuth } from '../AppStore/AuthorizationContext'
import LoanDetailSummaryCard from '../components/LoanDetailSummaryCard'

const ActiveLoanDetail = ({route,navigation}) => {
  const [test, setTest] = useState(14414)

const { isFetching, detailLoan, loanInfo} = useMidasAuth()
  const topTitle = 'Remaining Balance'
    
  const loanId = route.params?.loanId
  
  useEffect(() => {
    detailLoan(loanId)
  },[])

  
  return (
    <View style={globalStyles.rootContainer}>
      <Spinner  visible={isFetching}/>
      <LoanDetailSummaryCard productName={loanInfo.product_name} balance={loanInfo.total_balance} loanAmount={loanInfo.approved_amount} totalDeduction={loanInfo.totaldeduction} />
 
      
          {/* output list of deductions for the loan */}

          <FlatList
                 data={loanInfo.deductions}
                  renderItem={({ item }) => (
                      <DeductionItem
                          description={item.narration}
                          credit={item.credit}
                          debit={item.debit}
                          balance={item.loan_balance}
                      />  
                   )}
                   keyExtractor={(item) => item.id.toString()}
                   showsVerticalScrollIndicator={false}
            />        

    </View>
  )
}

export default ActiveLoanDetail