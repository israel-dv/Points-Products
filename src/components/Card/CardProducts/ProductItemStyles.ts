import { StyleSheet } from 'react-native'

export const productItemStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 55,
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  productDetails: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-around',
    marginLeft: 11,
  },
  productPoints: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
