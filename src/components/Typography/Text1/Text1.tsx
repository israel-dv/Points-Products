import { Text } from 'react-native'

import { TextRegulartype } from '../../../utils/types/fonts.types'
import { textStyles } from './Text1Styles'

export const Text1 = ({
  text,
  style,
  fontWeight = 'normal',
}: TextRegulartype) => {
  return <Text style={[textStyles.text, { fontWeight, ...style }]}>{text}</Text>
}
