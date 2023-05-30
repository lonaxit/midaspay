import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useMidasAuth } from '../AppStore/AuthorizationContext';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';



const ProfileScreen = ({navigation}) => {
  const { isProfile,profileInfo, getProfile, userInfo, fetchUser } = useMidasAuth()
  
  useEffect(() => {
    fetchUser()
},[])

  useEffect(() => {
    if (userInfo) {
      getProfile(userInfo.id)
    }
    
  }, [])
  


if (!userInfo) {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size={'large'} />
  </View>
  )
  }
  
  if (!profileInfo) {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
    </View>
    )
  }
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Spinner  visible={isProfile} />
      <View style={styles.wrapper}>

        <Image style={styles.userImg} source={require('../assets/images/user.png')} />
        <Text style={styles.userName}>{ profileInfo.user?.last_name}, { profileInfo.user?.first_name} { profileInfo.user?.other_name}</Text>
        
        <View style={styles.userBtnWrapper}>
           <TouchableOpacity style={styles.userBtn} onPress={()=>navigation.navigate('changepassword')}>
              <Text style={styles.userBtnText}>Update Password</Text>
           </TouchableOpacity>
         {/* <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.userBtnText}>Follow</Text>
         </TouchableOpacity> */}
        </View>

        <View style={styles.userInfoWrapper}>

        {/* <View style={styles.userInfoItem}>
          <Text style={styles.userInfoTitle}>22</Text>
           <Text style={styles.userInfoSubTitle}>Date of Birth</Text>
          </View> */}

          <View style={styles.userInfoItem}>
          <Text style={styles.userInfoTitle}>{userInfo.id}</Text>
            <Text style={styles.userInfoSubTitle}>MIDAS ID</Text>
          </View>

          {/* <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>22</Text>
            <Text style={styles.userInfoSubTitle}>Joined Since</Text>
        </View> */}

          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>{userInfo.ippis_number}</Text>
            <Text style={styles.userInfoSubTitle}>IPPIS</Text>
          </View>

        </View>
      </View>

      <View style={styles.secondaryContainer}>
        <View>

          
        <View style={styles.itemContainer}>
          <Text style={styles.icon}>
          <Fontisto name="date" size={16} color="black" />
            </Text>
            <Text style={styles.userInfoSubTitle}> Date of Birth </Text>
          </View>
          <View>
          <Text style={{fontSize:12,color:'black', fontWeight:'bold'}}>{profileInfo.user?.dob}</Text>
          </View>


          <View style={styles.itemContainer}>
              <Text style={styles.icon}>
                <MaterialIcons name="update" size={16} color="black" />
              </Text>
              <Text style={styles.userInfoSubTitle}> Joined Since </Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>{profileInfo.user?.date_joined}</Text>
          </View>


        <View style={styles.itemContainer}>
          <Text style={styles.icon}>
            <SimpleLineIcons name="badge" size={16} color="black" />
            </Text>
            <Text style={styles.userInfoSubTitle}> Membership Type</Text>
          </View>
          <View>
          <Text style={{fontSize:12,color:'black', fontWeight:'bold'}}>{profileInfo.member_type}</Text>
          </View>

          
          <View style={styles.itemContainer}>
            <Text style={styles.icon}>
                <MaterialCommunityIcons name="office-building-marker-outline" size={16} color="black"/>
            </Text>
            <Text style={styles.userInfoSubTitle}> Dept</Text>
          </View>
          <View>
              <Text style={{fontSize:12,color:'black', fontWeight:'bold'}}>{profileInfo.dept}</Text>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.icon}>
            <Ionicons name="location-outline" size={16} color="black" />
            </Text>
            <Text style={styles.userInfoSubTitle}> Address</Text>
          </View>
          <View>
            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}>
              {profileInfo.home_address}</Text>
          </View>

          
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // copied styles
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:70,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor:'#fff'
  },
  wrapper: {
    alignItems:'center'
  },
  secondaryContainer: {
    padding:10
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginTop:10

    // alignItems: 'center',
    // paddingVertical: 10,
    // borderRadius:4,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 1.41,
    // elevation: 2,
    // backgroundColor: '#fff',
    // marginBottom:8
    // borderBottomWidth:0.5
  },
  profileTitle: {
    fontSize: 12,
    color: '#666',
    textAlign:'center'
  },
  icon: {
    marginRight:8
  },
  userInfoDetail: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center',
  },
  
  // **************** 
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems:'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
   fontSize:20,
   color:'#333', 
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius:75
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom:10
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
   marginBottom:10
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom:10
  },

  userBtn: {
    backgroundColor:'#C96D3C',
    borderColor: '#C96D3C',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal:5
  },
  userBtnText: {
    color: '#fff',
    fontWeight:'bold'
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical:20
  },
  userInfoItem: {
  justifyContent:'center'
  },
  profileInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfoTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign:'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
   
  },
  
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
 
});
export default ProfileScreen