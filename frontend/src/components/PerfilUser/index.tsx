import React from 'react'
import { Container } from './styles'

interface IProps {
  perfilImg: string
}

export const PerfilUser = ({ perfilImg }: IProps) => {
  return (
    <Container className="container-perfil">
      <img src={perfilImg} alt="Perfil" />
      <p>
        <strong>Olá, Antonio!</strong>
        <span>antonio.pino@g.globo</span>
      </p>
    </Container>
  )
}
