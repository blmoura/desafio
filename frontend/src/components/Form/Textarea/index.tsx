import React from 'react'
import { Container } from './styles'

interface IProps {
  id: string
  value: string,
  onChange: any
}

export const TextArea = ({id, value, onChange}: IProps) => {
  return (
    <Container>
      <label htmlFor={id}>Insight</label>
      <textarea
        id={id}
        placeholder="Escreva aqui o seu insight…"
        value={value}
        onChange={onChange}
      ></textarea>
      <span className="quantity-characters">limite de caracteres: 400</span>
    </Container>
  )
}
