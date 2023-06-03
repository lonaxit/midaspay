import {Text, View, Alert, ActivityIndicator,SafeAreaView, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { BASE_URL_AUTH } from '../config';
import axios from 'axios'
import { useMidasAuth } from '../AppStore/AuthorizationContext';
import Spinner from 'react-native-loading-spinner-overlay';


const ChangePassword = ({navigation}) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordChange, setIsPasswordChange] = useState(false)
    
    const { userInfo } = useMidasAuth()
    
    // const navigation = useNavigation();

    const handleChangePassword =  async () => {
        if (password === confirmPassword) {
            setIsPasswordChange(true)
            try {
                    
                    await axios.put(`${BASE_URL_AUTH}/${userInfo.id}/update-password/`,{password:password})
                    Alert.alert('Success', 'Password updated successfully!', [
                        { text: 'OK', onPress: () => navigation.goBack() },
                      ]);
                    } catch (error) {
                    setIsPasswordChange(false)
                    Alert.alert('Error', 'Something Went Wrong');
                        }
                    setIsPasswordChange(false)

          // Perform password update logic here
          // For simplicity, we'll just show an alert
            
        //   Alert.alert('Success', 'Password updated successfully!', [
        //     { text: 'OK', onPress: () => navigation.goBack() },
        //   ]);
        } else {
          Alert.alert('Error', 'Passwords do not match!');
        }
      };

      if (!userInfo.id) {
        return (
          <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
        )
        }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9fbfc' }}>
     
      {/* <View style={{alignItems:'center', marginTop:50}}>
        <Image source={require('../assets/images/logo.png')} style={[styles.logo]} resizeMode='contain' />
      </View> */}

      {/* input wrapper */}
      <Spinner visible={ isPasswordChange }/>
      <View style={{padding:20, flex:1}}>

        <View style={{marginBottom:20}}>
          <Text style={{fontFamily:'nunito-bold', fontSize:24}}>Change Password</Text>
        </View>
              
      <View style={styles.inputContainer}>
         <AntDesign name="lock" size={20} color="#666" style={styles.iconStyle}/>
          <TextInput
            placeholder='Enter Password'
            secureTextEntry={true}
            style={{ padding: 10, flex: 1 }}
            value={password}
            onChangeText={text => setPassword(text)}
          />

              </View>
              
        <View style={styles.inputContainer}>
         <AntDesign name="lock" size={20} color="#666" style={styles.iconStyle}/>
          <TextInput
            placeholder='Confirm Password'
            secureTextEntry={true}
            style={{ padding: 10, flex: 1 }}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
   
      </View>
        
        <TouchableOpacity onPress={handleChangePassword} style={{
            backgroundColor: '#C96D3C',
            padding: 15,
            borderRadius: 10,
            marginBottom: 30,
            width: '100%',
            marginVertical: 10
            
          }}>
           <Text style={{color:'#fff', fontFamily:'nunito-bold',fontSize:18, textAlign:'center'}}> Update Password </Text>
            </TouchableOpacity>
              
      </View>
        
    </SafeAreaView>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
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
})