import { StyleSheet } from 'react-native'

import { COLORS } from '../../../utils/constants/productsUI'

export const cardPointsStyles = StyleSheet.create({
  card: {
    elevation: 1,
    borderRadius: 20,
    width: '100%',
    backgroundColor: COLORS.deepBlue,
    height: 143,
  },
  monthContainer: {
    paddingHorizontal: 19,
    paddingTop: 21,
  },
  pointsContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    paddingTop: 7,
  },
  cardShadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
})
