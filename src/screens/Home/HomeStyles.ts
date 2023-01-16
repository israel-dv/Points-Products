import { StyleSheet } from 'react-native'

export const homeStyles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  titlesContainer: {
    display: 'flex',
    marginTop: 27,
  },
  cardList: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 350,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
})
