import styled from "styled-components";

export const Container = styled.div`
  margin: -4rem auto 0;
  max-width: 1120px;
  padding: 0 1rem 5.5rem;

  h1 {
    color: var(--pink);
    text-align: center;
    font-style: italic;
    font-size: 1.25rem;
  }

  ul {
    margin-top: 24px;
  }

  button {
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 24px auto;
    font-size: 1rem;
    color: #666;
    font-weight: 500;
  }
`

export const ContainerSearch = styled.div`
  position: fixed;
  bottom: 16px;
  width: calc(100% - 32px);

  form {
    position: relative;
  }

  button {
    border-radius: 8px;
    padding: 15px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0;

    span {
      display: none;
    }
  }
`