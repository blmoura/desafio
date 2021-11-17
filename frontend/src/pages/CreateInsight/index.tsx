import { Link } from 'react-router-dom'
import Select from 'react-select'

import arrowBackImg from '../../assets/arrow_back_24dp.svg'
import { Container, ContentForm } from './styles'

export const CreateInsight = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Container>
      <div className="container-header">
        <h1>Criar <span>Insight</span></h1>
        <Link to="/">
          <span>Voltar</span>
          <img src={arrowBackImg} alt="Voltar" />
        </Link>
      </div>
      <form>
        <ContentForm>
          <div className="group-input">
            <label htmlFor="textarea-insight">Insight</label>
            <textarea id="textarea-insight" placeholder="Escreva aqui o seu insight…"></textarea>
            <span className="quantity-characters">limite de caracteres: 400</span>
          </div>
          <div className="group-input">
            <label htmlFor="select-tag"></label>
            <Select 
              id="select-tag"
              options={options} 
              isMulti={true}
            />
          </div>          
        </ContentForm>
        <button type="submit">Publicar</button>
      </form>
    </Container>
  )
}
