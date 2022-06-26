import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  qrcode: {
    height: Dimensions.get('window').height - 300,
    width: Dimensions.get('window').width
  },
  barcodebox: {
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
    // backgroundColor: 'lightblue'
  },
  qrtext: {
    fontSize: 16,
    margin: 20
  },
  maintext: {
    color: 'orange'
  }
})
