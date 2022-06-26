import { registerRootComponent } from 'expo'
import * as React from 'react'

import 'react-native-gesture-handler'

import { AuthProvider } from './src/providers/AuthProvider/index'

import App from './App'

const rootComponent = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(rootComponent)
