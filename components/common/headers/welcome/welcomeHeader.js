import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import styles from './welcomeheader.style'



const WelcomeHeader = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.welcomeHeader}>
     
          <Text>Hello Luper</Text>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <ImageBackground
            source={require('../../../../assets/images/bye.png')}
            style={{ width: 35, height: 35 }}
            imageStyle={{borderRadius:25}}
                  />
          </TouchableOpacity>
               
    </View>
  )
}

export default WelcomeHeader