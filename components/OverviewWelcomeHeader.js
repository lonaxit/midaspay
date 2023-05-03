import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ImageBackground } from 'react-native'
import { useAuth } from '../contextAPI/AuthContext'
import { ActivityIndicator } from 'react-native';


const OverviewWelcomeHeader = ({ onPress }) => {

    const { userData } = useAuth()


    
  return (
<View style={styles.welcomeHeader}>
    <Text>Hello {userData.last_name}</Text>
          <Pressable  onPress={onPress}>
          <AntDesign name="lock1" size={24} color="black" />
    {/* <ImageBackground
    source={require('../assets/images/menu.png')}
    style={{ width: 35, height: 35 }}
    imageStyle={{borderRadius:25}}
        /> */}
    </Pressable> 
</View>
  )
}

export default OverviewWelcomeHeader

const styles = StyleSheet.create({
    welcomeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop:40
    },
    welcomeText: {
        fontSize: 16,
        fontFamily:'nunito-bold'
    },
})