import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 2px;
    font-size: 14px;
  }

  textarea {
    height: 13rem;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    resize: none;
    padding-top: 0.5rem;
    font-size: 16px;
    margin-bottom: 3rem;

    &::-webkit-input-placeholder {
      font-size: 1.1rem;
      font-style: italic;
    }
    &:-moz-placeholder {
      font-size: 1.1rem;
      font-style: italic;
    }
    &::placeholder {
      font-size: 1.1rem;
      font-style: italic;
    }

    &:focus-visible,
    &:active {
      border: none;
      outline: none;
    }

  }

  .quantity-characters {
    font-size: 0.875rem;
    color: #00000040;
    font-weight: 500;
    font-style: italic;
    text-align: right;
  }
`
