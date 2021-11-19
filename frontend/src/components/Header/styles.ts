import styled from "styled-components";
import backgroundImg from '../../assets/background.svg'

export const Container = styled.header`
  background: url(${backgroundImg}) no-repeat center;
  background-position-y: 30%;
  background-color: var(--purple);
  padding: 1.5rem 1rem 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

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

export const InfoUser = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-color: var(--purple);
  padding: 9rem 1rem 7rem;
  display: flex;
  flex-direction: column;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(min-width: 1080px) {
    background-position-y: 185%;
  }

  @media(max-width: 1080px) {
    background-position-y: 130%;
  }

  @media(max-width: 768px) {
    background-position-y: 100%;
  }

  &::after {
    content: '';
    width: 50px;
    height: 2px;
    border: 0.5rem;
    background-color: var(--pink);
    margin-top: 3rem;
  }

  p {
    font-size: 2rem;
    font-style: italic;
    color: #f4f4f4;
    text-align: center;

    span {
      display: block;
      font-size: 1rem;
    }
  }
`
