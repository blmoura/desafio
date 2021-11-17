import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;

  .container-header {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: -10rem;

    a {
      display: inline-block;
      position: absolute;
      left: 0;

      span {
        display: none;
      }
    }
  }

  h1 {
    font-size: 1.3rem;
    color: var(--pink);
    font-weight: 300;
    font-style: italic;
    order: 2;
    text-align: center;
    margin: 0 auto;

    span {
      display: block;
      font-weight: 600;
    }
  }

  form {
    .group-input {
      display: flex;
      flex-direction: column;
      padding-bottom: 6rem;

      & + .group-input {
        margin-top: 24px;
      }
      
      label {
        margin-bottom: 2px;
        font-size: 14px;
      }

      textarea {
        height: 13rem;
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        resize: none;

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
    }

    button[type=submit] {
      position: fixed;
      bottom: 16px;
      left: 16px;
      width: calc(100% - 32px);
      padding: 20px;
      border-radius: 8px;
      background-color: var(--pink);
      color: #fff;
      border: none;
      font-size: 1.1rem;
      letter-spacing: 2px;
      font-weight: 600;
      font-style: italic;
      box-shadow: 0 8px 16px 0 #ed4d7740;
    }
  }
`

export const ContentForm = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  padding: 1rem;
  margin-top: 2.5rem;
`