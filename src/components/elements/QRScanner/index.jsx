import React, { useEffect, useState } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner'
import { View, Text, Button } from 'react-native'
import styles from './styles'

import api from '../../services/index'
import useAuth from '../../hooks/useAuth/index'

export default function QR ({ navigation }) {
  const auth = useAuth()

  const CONFIG = {
    cache: 'no-cache',
    mode: 'no-cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${auth.token}`
    }
  }

  const [state, setState] = useState({
    scanned: false,
    code: 0,
    text: 'Not yet scanned'
  })

  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  const askForCameraPermission = () => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status == 'granted')
    })()
    // console.log('asking')
  }

  useEffect(() => {
    askForCameraPermission()
    console.log(hasPermission)
  }, [])

  const handleBarCodeScanned = async ({ type, data }) => {
    setState(prev => ({ ...prev, scanned: true, text: data }))
    // await api.auth
    //   .checkItem('2416103138', CONFIG)
    //   .then(({ data }) => setState(prev => ({ ...prev, code: data })))
    //   .then(() => console.log(state.code))
    //   .catch(e => {
    //     console.log('something goes wrong', '\n', e)
    //     throw e
    //   })
  }

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={'Allow Camera'}
          onPress={() => askForCameraPermission()}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={state.scanned ? undefined : handleBarCodeScanned}
          style={styles.qrcode}
        />

        <Text style={styles.maintext}>
          {state.text}
          {hasPermission}
        </Text>

        {state.scanned && (
          <Button
            title={'Scan again?'}
            onPress={() => setScanned(false)}
            color='lightblue'
          />
        )}
      </View>
    </View>
  )
}
