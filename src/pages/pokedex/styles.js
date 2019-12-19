import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
from { transform: rotate(0deg)} to {transform: rotate(360deg)}`;

export const Container = styled.div`
  background: #fff;
  max-width: 700px;
  border-radius: 4px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #dc0a2d;
    display: flex;
    flex-direction: row;
  }

  svg {
    width: 100px;
  }

  form {
    display: flex;
    flex: 1;
    width: 100%;
    input {
      width: 100%;
      border: 1px solid #eee;
      padding: 12px 20px;
      border-radius: 4px;
      font-size: 15px;
    }
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #9a002d;
  border: 0px;
  padding: 5px 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    color: #fff;
  }

  svg {
    width: 35px;
    fill: #c7c7c7;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 1s infinite;
      }
    `}

  &:hover {
    background: #66002d;
  }
`;
