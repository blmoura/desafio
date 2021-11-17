import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import { CardInsight } from '../../components/CardInsight'
import { Container } from './styles'

interface IInsight {
  id: string
  text: string
  tags?: ITags[]
}

interface ITags {
  id: string
  name: string
}

export const FeedInsight = () => {
  const [insights, setInsights] = useState<IInsight[]>([])
  const [error, setError] = useState(null)

  useEffect(() => {
    api.get('/insights')
      .then(response => setInsights(response.data))
      .catch(error => setError(error))
  }, [])

  return (
    <Container>
      <h1>Feed de Insights</h1>
      <ul>
        {insights && insights.map(insight => (
          <CardInsight 
            key={insight.id}
            text={insight.text}
            tags={insight.tags}
          />
        ))}
      </ul>
    </Container>
  )
}
