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
  padding: 1.5rem 1rem 12rem;
  
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

  .container-create-insight {
    margin-top: 1rem;
    width: 50px;
    text-align: right;

    span {
      display: none;
    }
  }
`;