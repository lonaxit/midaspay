import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Item = ({item}) => {
  return (
    <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}

export default Item
const styles = StyleSheet.create({

   
  item: {
      //flex:1,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },


  
})