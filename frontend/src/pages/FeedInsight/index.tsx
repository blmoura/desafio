import { FormEvent, useEffect, useState } from 'react'
import { CardInsight } from '../../components/CardInsight'
import useInsights from '../../hooks/useInsights'
import { Container, ContainerSearch } from './styles'
import loadingPaginationInsightImg from '../../assets/loadingInsight.svg'
import { Input } from '../../components/Form/Input'
import { MdSearch, MdWarning } from 'react-icons/md'
import { api } from '../../api'
import { IFindInsight } from './interfaces'

export const FeedInsight = () => {
  const [addTotalPage, setAddTotalPage] = useState(3)
  const [textSearch, setTextSearch] = useState('') 
  const [findInsight, setFindInsight] = useState<IFindInsight[]>([])
  const { insights, getInsights } = useInsights(addTotalPage)

  useEffect(() => {
    getInsights()
  }, [addTotalPage])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    api.get(`/insights/terms?name=${textSearch}`)
      .then(response => setFindInsight(response.data))
  }

  return (    
    <Container>
      <h1>Feed de Insights</h1>
      <ul>
        {findInsight.length === 0 && (
          <li className="insight-not-found">
            Nenhum insight cadastrado 
            <MdWarning 
              size="1.4rem"
              color="#48144f"
            />
          </li>
        )}

        {(findInsight.length === 0 || !textSearch) && insights && insights.data?.map(insight => (
          <CardInsight 
            key={insight.id}
            text={insight.text}
            tags={insight.tags}
          />
        ))}

        {findInsight && findInsight.map(insight => (
          <CardInsight 
            key={insight.id}
            text={insight.text}
            tags={insight.tags}
          />
        ))}
      </ul>

      {
        (findInsight.length === 0 || !textSearch)
        && insights 
        && insights.count > addTotalPage 
        && <button onClick={() => setAddTotalPage(addTotalPage + 1)}>
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
