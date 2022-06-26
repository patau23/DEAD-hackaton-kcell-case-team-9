import React from 'react'
import { View, TextInput as RNTextInput } from 'react-native'

import styles from './styles'

export default function LoginInput ({ placeholder, isSecure, onChangeText }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <RNTextInput
        style={styles.textInputClose}
        placeholderTextColor='#FFCA4A'
        value={'+7'}
      />
      <RNTextInput
        style={styles.textInput}
        placeholderTextColor='orange'
        placeholder={placeholder}
        secureTextEntry={isSecure}
        onChangeText={text => {
          onChangeText(text)
        }}
        autoComplete='tel'
        keyboardType='numeric'
        maxLength={13}
      />
    </View>
  )
}
