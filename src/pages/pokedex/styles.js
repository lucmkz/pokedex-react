import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  max-width: 700px;
  border-radius: 4px;
  margin: 80px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;

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

  div {
    display: flex;
    flex: 1;
    width: 100%;
    input {
      width: 100%;
      border: 1px solid #eee;
      padding: 10px 0px 10px 65px;
      border-radius: 4px;
      font-size: 20px;
      text-align: center;
    }
    button {
      background: #9a002d;
      border: 0px;
      padding: 5px 15px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 35px;
        fill: #c7c7c7;
      }

      &:hover {
        background: #66002d;
      }
    }
  }
`;

export default Container;
