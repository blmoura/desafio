import React from 'react'
import { Container } from './styles'

interface IProps {
  value: string,
  onChange: any
}

export const Input = ({value, onChange}: IProps) => {
  return (
    <Container>
      <input 
        placeholder="Pesquise por termos ou categorias..."
        value={value}
        onChange={onChange}
      />
    </Container>
  )
}
