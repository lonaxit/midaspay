import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
 useRoute

const InactiveLoanScreen = () => {

  const navigation = useNavigation()
   const route = useRoute()
   
  
  const { id } = route.params
  // changing title dynamically
  // navigation.setOptions({ title: id });
  return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {/* <Text>Inactive Loan Screen {route.params?.id}</Text> */}
      <Text>Inactive Loan Screen {id}</Text>
    </View>
  )
}

export default InactiveLoanScreen