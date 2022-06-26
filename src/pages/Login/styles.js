import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default styles = StyleSheet.create({
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
