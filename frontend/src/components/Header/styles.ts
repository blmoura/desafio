import styled from "styled-components";
import backgroundImg from '../../assets/background.svg'

export const Container = styled.header`  
  background: url(${backgroundImg}) no-repeat center;
  background-color: var(--purple);
  background-size: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem 1rem 10rem;
  
  .container-logo {
    margin-top: 1rem;
    width: 50px;

    span {
      display: none;
    }

    img {
      width: 50px;
    }
  }

  .container-perfil {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-header); 
    position: relative;

    p {
      margin-top: 1rem;
      text-align: center;

      strong {
        display: block;
        font-size: 1.75rem;
        font-style: italic;
        font-weight: 400;
      }
    }

    &::after {
      content: '';
      width: 50px;
      height: 2px;
      border: 0.5rem;
      background-color: var(--pink);
      margin-top: 3rem;
    }
  }

  .container-create-insight {
    margin-top: 1rem;
    width: 50px;
    text-align: right;

    span {
      display: none;
    }
  }
`;