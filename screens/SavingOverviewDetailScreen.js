import { View, Text,  FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect} from 'react'
import SavingSummary from '../components/SavingSummary'
import { StyleSheet } from 'react-native'
import FlatListRenderItem from '../components/FlatListRenderItem'
import globalStyles from '../style/global.style'
import { useMidasAuth } from '../AppStore/AuthorizationContext'
import SavingDetailItem from '../components/SavingDetailItem'


const SavingOverviewDetailScreen = ({ route }) => {

    const {savingInfo, savingList} = useMidasAuth()
    
    const depositTotal = route.params.depositTotal

    useEffect(() => {
        savingList()
    }, [])

    if (!savingInfo) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
    }
    

    return (
     
            <View style={styles.container}>
            <SavingSummary totalsaving={depositTotal} />
            <View style={styles.historyContainer}>
            <Text style={styles.historyText}>Records</Text>
            {/* <Pressable>
                <Text style={globalStyles.historyText}>Inactive </Text>
            </Pressable> */}
            </View>
    
            <FlatList
            data={savingInfo}
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