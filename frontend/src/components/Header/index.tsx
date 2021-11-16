import logoImg from '../../assets/brand-insights.svg'
import plusImg from '../../assets/add_plus_24dp.svg'
import perfilImg from '../../assets/perfil.png'

import { Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <a href="/">
        <span>Insight</span>
        <img src={logoImg} alt="Insight" />
      </a>
      <div>
        <img src={perfilImg} alt="Perfil" />
        <p>
          <strong>Olá, Antonio!</strong>
          <span>antonio.pino@g.globo</span>
        </p>
      </div>
      <a href="/create">
        <span>Criar insight</span>
        <img src={plusImg} alt="Plus" />
      </a>
    </Container>
  )
}
