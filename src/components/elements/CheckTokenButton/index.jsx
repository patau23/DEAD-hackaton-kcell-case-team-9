import React from 'react'
import { Button } from 'react-native'

import usePresenter from './usePresenter.js'

export default function CheckTokenButton (props) {
  const { auth, checkToken } = usePresenter()
  return (
    <Button onPress={() => checkToken()} title='Check Token' color='#841584' />
  )
}
