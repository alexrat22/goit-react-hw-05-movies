import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AddTitle = styled.p`
  margin-left: 50px;
`;

export const AddList = styled.ul`
  display: flex;
  font-weight: 700;

  & :first-of-type {
    margin: 0 15px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: rgba(86, 141, 300, 1);

  &.active {
    color: #fff;
  }
`;
