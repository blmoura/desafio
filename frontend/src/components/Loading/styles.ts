import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  color: #f4f4f4;
  letter-spacing: 1.2px;
  font-size: 1.2rem;

  background: rgba(0, 0, 0, 0.8);
`

export const Spinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--pink);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`