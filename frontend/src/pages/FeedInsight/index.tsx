import { FormEvent, useEffect, useState } from 'react'
import { CardInsight } from '../../components/CardInsight'
import useInsights from '../../hooks/useInsights'
import { Container, ContainerSearch } from './styles'
import loadingPaginationInsightImg from '../../assets/loadingInsight.svg'
import { Input } from '../../components/Form/Input'
import { MdSearch } from 'react-icons/md'

export const FeedInsight = () => {
  const [paginate, setPaginate] = useState(3)
  const [textSearch, setTextSearch] = useState('') 
  const { insights, getInsights } = useInsights(paginate)

  useEffect(() => {
    getInsights()
  }, [paginate])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(textSearch)
  }

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

      {
        insights 
        && insights.count > paginate 
        && <button onClick={() => setPaginate(paginate + 1)}>
        <img src={loadingPaginationInsightImg} alt="Paginação Insight" />
        Toque para exibir mais insights
      </button>
      }

      <ContainerSearch>
        <form onSubmit={handleSubmit}>
          <Input
            value={textSearch}
            onChange={({target}: any) => setTextSearch(target.value)}
          />
          <button>
            <span>Enviar</span>
            <MdSearch size={24} color='#666' />
          </button>
        </form>
      </ContainerSearch>
      
    </Container>
  )
}
