import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 4px;
  margin-left: 40px;
  margin-bottom: 20px;
  padding: 5px 20px;
  background-color: teal;
  color: #fff;

  &:hover {
    background-color: rgb(1, 180, 180);
  }
`;
