import React from 'react'
import { View, Text,ImageBackground,Image,TouchableOpacity } from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';
import { useAuthentication } from '../../Context/Authentication';
// import { useAuth } from '../../Context/AuthContext';


const CustomDrawer = (props) => {
// const { logout } = useAuth()

const { logout, authenticated,authtoken } = useAuthentication()
    
    return (
      <View style={{flex:1}}>
    <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#fff'}}>
            {/* <ImageBackground source={require('../../assets/images/logo.png')} style={{ padding: 20 }}>
                <Image  source={require('../../assets/images/user.png')} style={{height:80, width:80, borderRadius:40, marginBottom:10}}/> 
                    <Text style={{ fontSize: 20 }}>Tivkaa Luper</Text> 
                    <Text style={{ fontSize: 16 }}>O-08</Text>  
                    <Text style={{fontSize:12}}>317752</Text>     
            </ImageBackground> */}


             <View style={{padding:20}}>
             <Image  source={require('../../assets/images/user.png')} style={{height:80, width:80, borderRadius:40, marginBottom:10}}/> 
                    <Text style={{ fontSize: 20 }}>Tivkaa Luper</Text> 
                    <Text style={{ fontSize: 16 }}>O-08</Text>  
                    <Text style={{ fontSize: 12 }}>317752</Text>
                 
                    
             </View>
               
                


            <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}>
            <DrawerItemList {...props} />   
            </View>
          
        
            </DrawerContentScrollView>
            
            
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>

                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => { }}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="share-social-outline" size={20} color="black" />
                    <Text style={{fontSize:15,marginLeft:5}}>Tell A Friend</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => { logout()} }>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name="exit-outline" size={20} color="black" />
                    <Text style={{fontSize:15,marginLeft:5}}>Sign Out </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
           
            
      </View>
  
  )
}

export default CustomDrawer