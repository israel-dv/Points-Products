import React from 'react'
import { SvgXml } from 'react-native-svg'

export const Substrac = (): React.ReactElement => {
  const xml = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.47357V10L10 5L0 0V2.52644L4.94713 5L0 7.47357Z" fill="#070707"/>
</svg>`

  return <SvgXml xml={xml} />
}
