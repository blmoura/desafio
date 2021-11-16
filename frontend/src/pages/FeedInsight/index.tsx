import React from 'react'
import { CardInsight } from '../../components/CardInsight'
import { Container } from './styles'

export const FeedInsight = () => {
  return (
    <Container>
      <h1>Feed de Insights</h1>
      <ul>
        <CardInsight 
          text="Flamengo consegue boa vitória fora de casa na estréia da Copa Liertadores 2021"
          tag="Temporada"
        />
        <CardInsight 
          text="Flamengo consegue boa vitória fora de casa na estréia da Copa Liertadores 2021"
          tag="Temporada"
        />
        <CardInsight 
          text="Flamengo consegue boa vitória fora de casa na estréia da Copa Liertadores 2021"
          tag="Temporada"
        />
        <CardInsight 
          text="Flamengo consegue boa vitória fora de casa na estréia da Copa Liertadores 2021"
          tag="Temporada"
        />
        <CardInsight 
          text="Flamengo consegue boa vitória fora de casa na estréia da Copa Liertadores 2021"
          tag="Temporada"
        />
        <CardInsight 
          text="Flamengo consegue boa vitória fora de casa na estréia da Copa Liertadores 2021"
          tag="Temporada"
        />
      </ul>
    </Container>
  )
}
