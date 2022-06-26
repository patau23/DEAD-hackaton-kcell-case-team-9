import React, { useEffect, useState } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Button,
  ImageBackground
} from 'react-native'

import api from '../../services/index'
import useAuth from '../../hooks/useAuth/index'
import LoginInput from '../../components/elements/LoginInput'
import styles from './styles'

export default function LoginScreen () {
  const auth = useAuth()

  const [state, setState] = useState({
    username: 'admin',
    password: 'adminadmin',
    isLoading: false,
    data: null,
    error: {}
  })

  const singIn = async () => {
    setState(prev => ({ ...prev, isLoading: true }))

    await api.auth
      .login(
        JSON.stringify({
          username: state.username,
          password: state.password
        }),
        {
          cache: 'no-cache',
          mode: 'no-cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Host: 'inventory'
          }
        }
      )
      .then(({ data }) => {
        setState(prev => ({ ...prev, data: data }))
      })
      .catch(e => {
        switch (e.response.status) {
          case 401:
            setState(prev => ({
              ...prev,
              error: 'Введен неправильный логин или пароль'
            }))
            break
          case 404:
            setState(prev => ({
              ...prev,
              error: `Запрос на авторизацию обработан, однако сервер не смог найти ответ, попробуйте зайти позже`
            }))
            break
          case 422:
            setState(prev => ({
              ...prev,
              error: `сервер успешно принял запрос, однако имеется какая-то логическая ошибка, из-за которой невозможно произвести операцию над ресурсом.`
            }))
            break
          default:
            setState(prev => ({ ...prev, error: null }))
            break
        }
        throw state.error
      })
      .finally(() => {
        setState(prev => ({ ...prev, isLoading: false }))
      })
  }

  useEffect(() => {
    auth.setToken(state.data?.token)
    auth.setUser(state.data?.data)
    console.log(state.data?.token)
  }, [state.data])

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBack}
        source={require('../../assets/mosaicBackground.jpg')}
      >
        <Header></Header>
        <View style={styles.main}>
          <LoginInput
            isSecure={false}
            placeholder='Phone Number'
            onChangeText={login =>
              setState(prev => ({ ...prev, username: login }))
            }
          />
          <Text style={styles.h1}>Put your phone number here to sign in</Text>
        </View>
        {/* <Button>
          <Text>Bruh</Text>
        </Button> */}
        <Footer></Footer>
      </ImageBackground>
    </View>
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

{
  /* <Text>Введите свои данные для входа</Text>
      <LoginInput
        isSecure={false}
        placeholder='login'
        onChangeText={login => setUsername(login)}
      />
      <LoginInput
        isSecure={true}
        placeholder='password'
        onChangeText={password => setPassword(password)}
      />
      {error ? <Text style={style.textErr}>{error}</Text> : <></>}
      <TouchableOpacity
        style={StyleSheet.compose(
          style.loginBtn,
          isLoading ? style.loading : {}
        )}
        disabled={isLoading}
        onPress={() => {
          singIn()
        }}
      >
        <Text style={style.loginText}>LOGIN</Text>
      </TouchableOpacity> */
}
