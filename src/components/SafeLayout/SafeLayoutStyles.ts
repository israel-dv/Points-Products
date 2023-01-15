import { StyleSheet } from 'react-native'

import { COLORS } from '../../utils/constants/productsUI'

export const layoutStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingBottom: 40,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: COLORS.lightGray,
  },
})
