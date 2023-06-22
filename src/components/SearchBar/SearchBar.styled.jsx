import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Input = styled.input`
  width: 250px;
  padding: 5px 5px;
  margin-right: 10px;
  border: transparent;
  border-radius: 4px;
  outline: none;
`;

export const InputButton = styled.button`
  padding: 5px 15px;
  margin-right: 10px;
  border: transparent;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  :hover {
    background-color: rgba(86, 141, 229, 1);
    color: #fff;
  }
`;
