import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimensions,handPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimensions)} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn