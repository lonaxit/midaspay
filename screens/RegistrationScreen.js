import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Image, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const ApplyMembershipScreen = () => {
  return (
      <SafeAreaView style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <View>
              <Text>New Membership</Text>
          </View>
      {/* <KeyboardAvoidingView>

      <View style={{paddingHorizontal:25}}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/images/key(1).png')} style={{height:150, width:150}}/>
            </View>
                <Text style={styles.loginText}>
                    Login
                </Text>

        <View style={styles.loginInput}>
          <AntDesign name="user" size={20} color="#666"  style={styles.iconStyle}/>
          <TextInput placeholder='Enter your MIDAS number' style={{flex:1, paddingVertical:0}}/>
        </View>

        <View style={styles.loginInput}>
        <AntDesign name="lock" size={20} color="#666" style={styles.iconStyle}/>
        
          <TextInput placeholder='Enter your password' style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true} />
          
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color:'#af3015', fontWeight:'700'}}>Change?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={()=>{}} style={{backgroundColor:'#af3015', padding:20, borderRadius:10, marginBottom:30}}>
          <Text style={{color:'#fff', fontFamily:'nunito-bold',fontSize:18, textAlign:'center'}}>Login</Text>
        </TouchableOpacity>

        <View>

          <View>
          <Text style={{textAlign:'center', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:7}}>New to MIDAS?</Text>
          </View>
        

          <View style={{marginTop:15}}>
          <TouchableOpacity onPress={()=>{}}>
          <Text style={{fontFamily:'nunito-mediumItalic', fontSize:14, color:'#363130',textAlign:'center'}}>Apply for membership</Text>
          </TouchableOpacity>
          </View>
         
         
        </View>

        </View>

      </KeyboardAvoidingView> */}
      
    </SafeAreaView>
    
  )
}

export default ApplyMembershipScreen

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