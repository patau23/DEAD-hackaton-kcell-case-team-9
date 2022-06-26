import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function CheckIsStoreWorking () {
  const [Item, setItem] = useState()
  let counter = 100

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      setItem(value)
    } catch (e) {
      console.log(e)
    }
  }
  const getData = async key => {
    try {
      setItem(await AsyncStorage.getItem(key).then(res => res))
    } catch (e) {
      console.log(e)
    }
  }
  const removeData = async key => {
    counter++
    try {
      await AsyncStorage.removeItem(key)
      setItem(null)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Button
        onPress={() => storeData('@storage_Key', `${counter}`)}
        title={'store data'}
        color='#841584'
      />
      <Button
        onPress={() => getData('@storage_Key')}
        title={'get data'}
        color='#841584'
      />
      <Button
        onPress={() => removeData('@storage_Key')}
        title={'remove data'}
        color='#841584'
      />
      <Text>{Item}</Text>
    </>
  )
}
