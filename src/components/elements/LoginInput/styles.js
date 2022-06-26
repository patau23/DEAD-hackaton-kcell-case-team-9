import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({
  textInputClose: {
    color: 'orange',
    height: 50,
    width: 0.1 * width,
    fontSize: 20,
    paddingLeft: 15,
    backgroundColor: 'rgb(54, 142, 115)',
    borderWidth: 2,
    borderColor: 'rgb(54, 118, 88)',
    borderStyle: 'solid',
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRightWidth: 0
  },
  textInput: {
    color: 'orange',
    height: 50,
    width: 0.6 * width,
    fontSize: 20,
    paddingLeft: 15,
    backgroundColor: 'rgb(54, 142, 115)',
    borderWidth: 2,
    borderColor: 'rgb(54, 118, 88)',
    borderStyle: 'solid',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderLeftWidth: 0
  }
})
