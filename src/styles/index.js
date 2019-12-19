import styled from 'styled-components';

export const Card = styled.ul`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: #fff;
    width: 150px;
    border-radius: 4px;
    margin: 20px 20px;
    width: 200px;

    h1 {
      color: #dc0a2d;
    }

    img {
      width: 100px;
    }
  }
`;
