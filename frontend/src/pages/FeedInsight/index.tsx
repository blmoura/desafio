import { useEffect, useState } from 'react'
import { CardInsight } from '../../components/CardInsight'
import useInsights from '../../hooks/useInsights'
import { Container } from './styles'
import loadingPaginationInsightImg from '../../assets/loadingInsight.svg'

export const FeedInsight = () => {
  const [paginate, setPaginate] = useState(3)
  const { insights, getInsights } = useInsights(paginate)

  useEffect(() => {
    getInsights()
  }, [paginate])

  return (    
    <Container>
      <h1>Feed de Insights</h1>
      <ul>
        {insights && insights.data?.map(insight => (
          <CardInsight 
            key={insight.id}
            text={insight.text}
            tags={insight.tags}
          />
        ))}
      </ul>

      {insights && insights.count > paginate && <button onClick={() => setPaginate(paginate + 1)}>
        <img src={loadingPaginationInsightImg} alt="Paginação Insight" />
        Toque para exibir mais insights
      </button>}
      
    </Container>
  )
}
