import React from 'react'
import { StatusBar } from 'react-native'

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
// import { NavigationContainer } from '@react-navigation/native'
// import Ionicons from 'react-native-vector-icons/Ionicons'

import LoginScreen from './src/pages/Login/index'
// import QRScreen from './src/pages/QR/index'
import HomeScreen from './src/pages/Home/index'
// import PersonalScreen from './src/pages/Personal/index'
// import Settings from './src/pages/Settings/index'
import LoadingView from './src/components/UI/LoadingView'

import useAuth from './src/hooks/useAuth/index'

// const Tab = createMaterialTopTabNavigator()

export default function App () {
  const auth = useAuth()

  if (!auth.isLoaded) return <LoadingView />

  //   if (!auth.user)
  //     return (
  //       <>
  //         <StatusBar hidden={false} />
  //         <LoginScreen></LoginScreen>
  //       </>
  //     )

  return (
    <>
      <StatusBar hidden={false} />
      <HomeScreen></HomeScreen>
    </>
  )
}
