import React from 'react'

import { Heading1 } from './Heading1'
import { Heading3 } from './Heading3'
import { Text1 } from './Text1'
import { Text2 } from './Text2'

type TypographyProps = {
  children: React.ReactNode
}

export const Typography = ({ children }: TypographyProps) => {
  return <>{children}</>
}

Typography.Heading1 = Heading1
Typography.Heading3 = Heading3
Typography.Text2 = Text2
Typography.Text1 = Text1
