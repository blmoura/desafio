import React from 'react'
import { Container } from './styles'

interface IProps {
  text: string
  tag?: string
}

export const CardInsight = ({ tag, text }: IProps) => {
  return (
    <Container>
      <span>{ text }</span>
      <span className="tag">{tag}</span>
    </Container>
  )
}
