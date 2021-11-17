import React from 'react'
import { Container, Spinner } from './styles'

export const Loading = () => {
  return (
    <Container>
      <Spinner />
      Carregando...
    </Container>
  )
}
