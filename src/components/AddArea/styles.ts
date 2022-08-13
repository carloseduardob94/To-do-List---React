import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px;

  display: flex;
  align-items: center;
  text-align: center;

  .image{
    font-size: 50px;
    line-height: 50px;
    margin-right: 7px;
    padding-bottom: 12px;
  }

  > input{
    border: none;
    background: transparent;
    outline: 0;
    color: #FFF;
    font-size: 18px;
  }
`;