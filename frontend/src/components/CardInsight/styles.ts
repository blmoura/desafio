import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  background: #fff;
  padding: 16px;
  border-radius: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
  font-weight: 500;  

  span:first-child {
    display: block;
  }

  .tag {
    display: inline-block;
    margin-top: 24px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid var(--pink);
    color: var(--pink);
    font-weight: 700;
  }

  & + li {
    margin-top: 8px;
  }
`