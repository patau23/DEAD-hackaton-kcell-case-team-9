import React, { useEffect, useState } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner'
import { View, Text, Button } from 'react-native'
import styles from './styles'

import api from '../../services/index'
import useAuth from '../../hooks/useAuth/index'

export default function QRCodeScanner ({ navigation }) {
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
    // <View style={styles.container}>
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
      {/* </View> */}
    </View>
  )
}

// OLD COMPONENT

// export default function QRScreen () {
//   const auth = useAuth()
//   const CONFIG = {
//     cache: 'no-cache',
//     mode: 'no-cors',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization: `Bearer ${auth.token}`
//     }
//   }
//   const [isLoading, setIsLoading] = useState(false)
//   const [code, setCode] = useState()
//   //   let thisScanner = null

//   const onSuccess = async e => {
//     // wait(2000).then(function () {
//     // navigation.navigate("Home", {code: e.data})
//     // })
//     console.log('QR 35 - doing request to find item')
//     setIsLoading(true)
//     console.log(e.data)
//     await api.auth
//       .checkItem(e.data, CONFIG)
//       .then(({ data }) => setCode(data))
//       .catch(e => {
//         console.log('something goes wrong')
//         console.log(e)
//         throw e
//       })
//       .finally(() => setIsLoading(false))
//     console.log(code, 'yeah we get some code')
//     navigation.navigate('Home', { code: code })
//   }

//   if (isLoading) return <Text>Loading, Wait</Text>

//   return (
//     <View>
//       {/* <QRCodeScanner
//         // cameraStyle={styles.qrstyles}
//         onRead={e => onSuccess(e)}
//         // ref={node => (thisScanner = node)}
//         reactivate={false}
//       /> */}
//       <BarCodeScanner
//         // onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={{ height: 400, width: 400 }}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   qrstyles: {
//     // width: "100%",
//     // height: "100%",
//   }
// })
