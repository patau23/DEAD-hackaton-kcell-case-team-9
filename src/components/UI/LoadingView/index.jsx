import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

import styles from './styles'

export default function LoadingView (props) {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={60} color={'rgba(54,184,134, 1)'} />
    </View>
  )
}
