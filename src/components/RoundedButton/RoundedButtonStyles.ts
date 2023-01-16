import { StyleSheet } from 'react-native'

import { COLORS } from '../../utils/constants/productsUI'

export const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.deepBlue,
    height: 50,
    borderRadius: 10,
    display: 'flex',
  },
  text: {
    color: 'white',
  },
})
