import { View, Text, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import SavingSummary from '../components/SavingSummary'
import { StyleSheet } from 'react-native'
import FlatListRenderItem from '../components/FlatListRenderItem'
import globalStyles from '../style/global.style'

const SavingOverviewDetailScreen = ({ route }) => {

    const [data, setData] = useState([
        { id: 1, name: 'Long Term Loan', deduction: 75000, amount: 2500000, description:'Feb IPPIPS Deduction, 23' },
        { id: 2, name: 'Short Term Loan', deduction: 45000, amount: 750000, description:'Feb IPPIPS Deduction, 23' },
        { id: 3, name: 'Fertilizer Loan', deduction: 25000, amount: 50000,description:'Feb IPPIPS Deduction, 23'},
        { id: 4, name: 'Christmas Package', deduction: 10000, amount: 150000,description:'Feb IPPIPS Deduction, 23' },
        { id: 5, name: 'Land Scheme', deduction: 200000, amount: 1800000,description:'Feb IPPIPS Deduction, 23' },
        { id: 6, name: 'Household Items', deduction: 14585, amount: 65000, description: 'Feb IPPIPS Deduction, 23' },
        { id: 7, name: 'Christmas Package', deduction: 10000, amount: 150000,description:'Feb IPPIPS Deduction, 23' },
        { id: 8, name: 'Land Scheme', deduction: 200000, amount: 1800000,description:'Feb IPPIPS Deduction, 23' },
        { id: 9, name: 'Household Items', deduction: 14585, amount: 65000,description:'Feb IPPIPS Deduction, 23' },
    ])


    const userId = route.params.userId
    return (
     
            <View style={styles.container}>
            <SavingSummary />
            <View style={styles.historyContainer}>
            <Text style={styles.historyText}>Records</Text>
            {/* <Pressable>
                <Text style={globalStyles.historyText}>Inactive </Text>
            </Pressable> */}
            </View>
    
            <FlatList
            data={data}
                      renderItem={({ item }) => (
                        <FlatListRenderItem
                          title={item.name}
                          description={item.description}
                          deduction={item.deduction}
                          totalamount={item.amount}
                      />
                      )}
                
            keyExtractor={(item) => item.id.toString()}
                // extraData={selectedLoan}
            showsVerticalScrollIndicator={false}
            />
        </View>
  )}

export default SavingOverviewDetailScreen

const styles = StyleSheet.create({
    container: {
       
        paddingTop:30,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1,
        backgroundColor:'#fff'
    },
    // loan header item
    historyContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    historyText: {
        fontSize:14,
        color: '#9B9B9B',
        fontFamily: 'nunito-medium',
        fontWeight:'bold'
    },
})