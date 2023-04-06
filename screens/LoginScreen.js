import React, {  useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Image, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuthentication } from '../Context/Authentication';
// import { useAuth } from '../Context/AuthContext';



const LoginScreen = () => {
  const { height } = useWindowDimensions()
  const navigation = useNavigation()

// const { test } = useAuth()
  
  
  const { login } = useAuthentication()

  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  // 
  // const signin = async () => {

  //   const res = await login(username, password)
  //   if (res && res.error) {
  //     alert(`something went wrong`)
  //   } 

  // }
  const signin = async () => {
    try {
      const res = await login(username, password);
      if (res && res.error) {
        throw new Error('Something went wrong');
      }
      // handle success scenario
    } catch (error) {
      console.log(`Error occurred: ${error.message}`);
      alert('Something went wrong');
    }
  };
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#f9fbfc'}}>
      <View style={{alignItems:'center', marginTop:50}}>
        <Image source={require('../assets/images/logo.png')} style={[styles.logo]} resizeMode='contain' />
      </View>

      {/* <View style={{ justifyContent:'center', alignItems:'center'}}>
        <Text style={{ fontFamily: 'nunito-regular', fontSize: 16 ,fontWeight:'600'}}>Welcome back</Text>
        <Text style={{fontFamily:'nunito-regular', fontSize:16, fontWeight:'600'}}>you have been missed!</Text>
      </View> */}

      {/* input wrapper */}
      <View style={{padding:20, flex:1}}>

        <View style={{marginBottom:20}}>
          <Text style={{fontFamily:'nunito-bold', fontSize:24}}>Login</Text>
        </View>

      <View style={styles.inputContainer}>
        <AntDesign name="user" size={20} color="#666"  style={styles.iconStyle}/>
          <TextInput
            placeholder='Enter username'
            style={{ padding: 10,flex:1 }}
            value={username}
            onChangeText={text => setUsername(text)}
         
          />
      </View>

        <View style={styles.inputContainer}>
         <AntDesign name="lock" size={20} color="#666" style={styles.iconStyle}/>
          <TextInput
            placeholder='Enter password'
            secureTextEntry={true}
            style={{ padding: 10, flex: 1 }}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color:'#af3015'}}>Change?</Text>
          </TouchableOpacity>
      </View>
        
        <TouchableOpacity onPress={signin} style={{
            backgroundColor: '#af3015',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            width: '100%',
            marginVertical: 10
            
          }}>
           <Text style={{color:'#fff', fontFamily:'nunito-bold',fontSize:18, textAlign:'center'}}>Login</Text>
        </TouchableOpacity>

        <View>
        <Text style={{textAlign:'center', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:7}}>New to MIDAS?</Text>
        </View>

        <View style={{marginTop:15}}>
         <TouchableOpacity onPress={()=>navigation.navigate('newmembership')}>
          <Text style={{fontFamily:'nunito-mediumItalic', fontSize:14, color:'#363130',textAlign:'center'}}>Apply for membership</Text>
          </TouchableOpacity>
        </View>
        <Text>{username}</Text>
        <Text>{password}</Text>
        


      </View>

       

      

        
       
        
    </SafeAreaView>

    // <SafeAreaView>
    //       <View style={styles.container}>
    //   <View style={{paddingHorizontal:25}}>
    //         <View style={styles.imageContainer}>
    //           <Image source={require('../assets/images/logo.png')} style={{height:50, width:50, resizeMode:'contain'}}/>
    //         </View>
    //             <Text style={styles.loginText}>
    //                 Login
    //             </Text>

    //     <View style={styles.loginInput}>
    //       <AntDesign name="user" size={20} color="#666"  style={styles.iconStyle}/>
    //       <TextInput placeholder='Enter your MIDAS number' style={{flex:1, paddingVertical:0}}/>
    //     </View>

    //     <View style={styles.loginInput}>
    //     <AntDesign name="lock" size={20} color="#666" style={styles.iconStyle}/>
        
    //       <TextInput placeholder='Enter your password' style={{ flex: 1, paddingVertical: 0 }}
    //         secureTextEntry={true} />
          
    //       <TouchableOpacity onPress={()=>{}}>
    //         <Text style={{color:'#af3015', fontWeight:'700'}}>Change?</Text>
    //       </TouchableOpacity>
    //     </View>

    //     <TouchableOpacity onPress={()=>{}} style={{backgroundColor:'#af3015', padding:20, borderRadius:10, marginBottom:30}}>
    //       <Text style={{color:'#fff', fontFamily:'nunito-bold',fontSize:18, textAlign:'center'}}>Login</Text>
    //     </TouchableOpacity>

    //     <View>

    //       <View>
    //       <Text style={{textAlign:'center', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:7}}>New to MIDAS?</Text>
    //       </View>
        

    //       <View style={{marginTop:15}}>
    //       <TouchableOpacity onPress={()=>{}}>
    //       <Text style={{fontFamily:'nunito-mediumItalic', fontSize:14, color:'#363130',textAlign:'center'}}>Apply for membership</Text>
    //       </TouchableOpacity>
    //       </View>
         
         
    //     </View>

    //     </View>
    // </View>
    // </SafeAreaView>

    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logo:{
    width: '30%',
    maxWidth:300,
    maxHeight:300
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 25,
    alignItems: 'center'
    // backgroundColor: '#fff',
    // width: '100%',
    // borderColor: '#e8e8e8',
    // borderWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // marginVertical:5
  },
  iconStyle: {
    marginRight:5
  }
  // container: {
  //   flex: 1,
  //   justifyContent:'center'
  // },
  // imageContainer: {
  //   alignItems:'center'
  // },
  // loginText: {
  //   fontFamily: 'nunito-medium',
  //   fontSize: 28,
  //   fontWeight: '500',
  //   color: '#333',
  //   marginBottom:30
  // },
  // loginInput: {
  //   flexDirection: 'row',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ccc',
  //   paddingBottom: 8,
  //   marginBottom:25
  // },
  // iconStyle: {
  //   marginRight:5
  // }
})