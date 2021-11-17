import React from 'react'
import { Container } from './styles'

interface IProps {
  text: string
  tags?: ITags[]
}

interface ITags {
  id: string
  name: string
}

export const CardInsight = ({ tags, text }: IProps, props: any) => {
  return (
    <Container {...props}>
      <span className="text-card">{ text }</span>
      {tags && tags.map(tagItem => (
        <span key={tagItem.id} className="tag">{tagItem.name}</span>
      ))}
    </Container>
  )
}
