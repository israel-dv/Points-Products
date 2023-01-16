import React, { Fragment } from 'react'

import { Heading1 } from './Heading1'
import { Heading2 } from './Heading2'
import { Heading3 } from './Heading3'
import { Text1 } from './Text1'
import { Text2 } from './Text2'
import { Text3 } from './Text3'

type TypographyProps = {
  children: React.ReactNode
}

export const Typography = ({ children }: TypographyProps) => {
  return <Fragment key="typography">{children}</Fragment>
}

Typography.Heading1 = Heading1
Typography.Heading2 = Heading2
Typography.Heading3 = Heading3
Typography.Text1 = Text1
Typography.Text2 = Text2
Typography.Text3 = Text3
