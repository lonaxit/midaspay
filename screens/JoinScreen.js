import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Image, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const JoinScreen = () => {
  return (
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <View>
              <Text>New Membership</Text>
          </View>
      
    </SafeAreaView>
    
  )
}

export default JoinScreen

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor:'#fff'
//   },
//   imageContainer: {
//     alignItems:'center'
//   },
//   loginText: {
//     fontFamily: 'nunito-medium',
//     fontSize: 28,
//     fontWeight: '500',
//     color: '#333',
//     marginBottom:30
//   },
//   loginInput: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingBottom: 8,
//     marginBottom:25
//   },
//   iconStyle: {
//     marginRight:5
//   }
})