import logoImg from '../../assets/brand-insights.svg'
import plusImg from '../../assets/add_plus_24dp.svg'
import perfilImg from '../../assets/perfil.png'

import { Container, Content, InfoUser } from './styles'
import { Link, useLocation } from 'react-router-dom'


export const Header = () => {
  let location = useLocation()

  if(location.pathname === '/')
    return (
      <>
        <Container>
          <Content>
            <Link to="/" className="container-logo">
                <span>Insight</span>
                <img src={logoImg} alt="Insight" />
            </Link>

            <img src={perfilImg} alt="Perfil" />

            <Link to="/create" className="container-create-insight">
              <span>Criar insight</span>
              <img src={plusImg} alt="Criar Insight" />
            </Link>
          </Content>
        </Container>
        <InfoUser>
          <p>
            Olá, Antonio!
            <span>antonio.pina@g.globo</span>
          </p>
        </InfoUser>
      </>
    )

  else
    return (
      <Container>
        <Content>
        </Content>
      </Container>
    )
}
