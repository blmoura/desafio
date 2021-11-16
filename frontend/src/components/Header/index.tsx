import logoImg from '../../assets/brand-insights.svg'
import plusImg from '../../assets/add_plus_24dp.svg'
import perfilImg from '../../assets/perfil.png'

import { Container, Content } from './styles'

export const Header = () => {
  return (
    <Container>
      <Content>
        <a href="/" className="container-logo">
          <span>Insight</span>
          <img src={logoImg} alt="Insight" />
        </a>
        <div className="container-perfil">
          <img src={perfilImg} alt="Perfil" />
          <p>
            <strong>Olá, Antonio!</strong>
            <span>antonio.pino@g.globo</span>
          </p>
        </div>
        <a href="/create" className="container-create-insight">
          <span>Criar insight</span>
          <img src={plusImg} alt="Criar Insight" />
        </a>
      </Content>
    </Container>
  )
}
