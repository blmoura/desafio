import styled from "styled-components";

export const Container = styled.div`
  margin: -11rem auto 0;
  max-width: 1120px;
  padding: 0 1rem;

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