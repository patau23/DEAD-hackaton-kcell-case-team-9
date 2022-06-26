import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native'
import { SMS } from 'expo-sms'

import SmsListener from 'react-native-android-sms-listener'

import { style } from '../style'
// import useAuth from '../../hooks/useAuth/index'
import QRCodeScanner from '../QR/index'
import Modal from '../../components/elements/Modal/index'

const { width, height } = Dimensions.get('window')

export default function HomeScreen ({ navigation, route }) {
  //   const auth = useAuth()

  //   useEffect(() => {
  //     async function Use () {
  //       //   if (SMS.isAvailableAsync())
  //       const { result } = await SMS.sendSMSAsync('87475659083', 'bruh')
  //       console.log(result)
  //     }
  //     Use()
  //   }, [])

  return (
    // <View style={style.screen}>
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBack}
        source={require('../../assets/mosaicBackground.jpg')}
      >
        <Header></Header>
        <View style={styles.main}>
          <Text style={styles.h1}>Home Page</Text>

          <Modal>
            <QRCodeScanner />
          </Modal>
        </View>
        <Footer></Footer>
      </ImageBackground>
    </View>
    // </View>
  )
}

const Header = ({ chldren }) => <View style={styles.header}>{chldren}</View>

const Footer = ({ children }) => (
  <View style={styles.footer}>
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(54,184,134, 1)'
      }}
    />
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(252,183,18, 1)',
        borderTopLeftRadius: 40
      }}
    >
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(252,183,18, 1)'
  },
  header: {
    height: 0.2 * height,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgBack: {
    height: 0.3 * height
  },
  main: {
    height: 0.5 * height,
    backgroundColor: 'rgba(54,184,134, 1)',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    height: 0.2 * height
  },
  phoneLoginWrapper: {
    flexDirection: 'row'
  },
  h1: {
    color: 'rgba(252,183,18, 1)'
  }
})
