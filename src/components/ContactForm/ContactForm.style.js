import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;

  max-width: 400px;
  border: 1px solid black;
  padding: 20px;

  label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    font-size: 28px;

    color: #000000;
  }

  input {
    height: 20px;
    max-width: 200px;
    margin-bottom: 20px;
  }

  button {
    padding: 5px;
    max-width: 100px;
    background-color: blue;
    color: white;
    border-radius: 4px;
  }

  li {
    margin-bottom: 20px;
  }
`;
