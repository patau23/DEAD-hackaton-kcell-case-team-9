import React from 'react'
import { View, StatusBar, StyleSheet, Text, Button } from 'react-native'
import useAuth from '../../hooks/useAuth'
import { style } from '../style'

export default function PersonalScreen () {
  const auth = useAuth()
  const user = auth.user

  return (
    <View style={style.screen}>
      <Text>{user.id}</Text>
      <Text>{user.first_name}</Text>
      <Text>{user.last_name}</Text>
      <Text>{user.ip}</Text>
    </View>
  )
}
