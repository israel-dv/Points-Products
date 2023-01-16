import { StyleSheet } from 'react-native'

import { COLORS } from '../../utils/constants/productsUI'

export const detailsStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    backgroundColor: COLORS.lightBlue,
  },
  container: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 24,
    paddingHorizontal: 20,
  },
  cardImageContainer: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    marginTop: 20,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardImageShadow: {
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  detailsText: {
    color: COLORS.gray100,
    marginTop: 32,
  },
  dateText: {
    marginVertical: 20,
  },
  acumulateText: {
    color: COLORS.gray100,
    marginBottom: 32,
  },
  button: {
    marginTop: 47,
    marginBottom: 20,
  },
})
