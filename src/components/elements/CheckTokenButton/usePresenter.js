import useAuth from '../../../hooks/useAuth/index.js'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function usePresenter () {
  const auth = useAuth()
  const checkToken = async () => {
    let storageToken = await AsyncStorage.getItem('auth-token')
    console.log(
      `Token in auth hook: \n ${auth.token} \nToken in async storage: ${storageToken}`
    )
  }
  return { auth, checkToken }
}
