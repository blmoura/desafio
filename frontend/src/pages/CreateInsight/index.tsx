import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../api'

import arrowBackImg from '../../assets/arrow_back_24dp.svg'
import { TextArea } from '../../components/Form/Textarea'
import { Loading } from '../../components/Loading'
import { Container, ContentForm } from './styles'

export const CreateInsight = () => {
  const [textInsight, setTextInsight] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)

    api.post('/insights', { text: textInsight })
      .then(response => {
        if(response.status === 201) {
          setLoading(false)
          navigate('/')
        }
      })
  }

  return (
    <Container>
      {loading && <Loading />}
      <div className="container-header">
        <h1>Criar <span>Insight</span></h1>
        <Link to="/">
          <span>Voltar</span>
          <img src={arrowBackImg} alt="Voltar" />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <ContentForm>
          <TextArea
            id="insight-textarea"
            value={textInsight}
            onChange={({ target }: any) => setTextInsight(target.value)}
          />
        </ContentForm>
        <button type="submit">Publicar</button>
      </form>
    </Container>
  )
}
