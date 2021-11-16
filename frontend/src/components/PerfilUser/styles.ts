import styled from "styled-components";

export const Container = styled.div`  
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
  
`