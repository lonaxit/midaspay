import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FlatListRenderItem from './FlatListRenderItem'
import globalStyles from '../style/global.style'


const SectionHeader = ({leftText,rightText,onPress}) => {
    const navigation = useNavigation()
  return (
        <View>
            <View style={globalStyles.historyContainer}>
              <Text style={globalStyles.historyText}>History</Text>
              
            <Pressable android_ripple={{color:'#ccc'}} onPress={onPress}>
                <Text style={globalStyles.historyText}>Inactive </Text>
            </Pressable>
        </View>
        </View>
  )
}

export default SectionHeader

const styles = StyleSheet.create({

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

    // loan item styles

    loanItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 0.6,
        backgroundColor: '#fff',
        marginBottom:15
        // borderBottomWidth:0.5
    },
 
})