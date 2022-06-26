import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import useAuth from '../../hooks/useAuth/index'
import { style as GlobalStyles } from '../style'
import CheckTokenButton from '../../components/elements/CheckTokenButton'
import CheckIsStoreWorking from '../../components/elements/CheckIsStoreWorking'

export default function SettingsScreen ({ navigation }) {
  const auth = useAuth()
  const onLogOut = () => auth.logOut()

  return (
    <View style={GlobalStyles.screen}>
      <Button
        onPress={() => {
          onLogOut()
        }}
        title='Log out'
      ></Button>
      <Text>Settings</Text>
      <CheckIsStoreWorking />
      <CheckTokenButton />
    </View>
  )
}
