import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
  padding: 10px 0;
  margin-bottom: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: rgba(86, 141, 229, 1);
`;

export const StyledLink = styled(NavLink)`
  font-weight: 600;
  margin-left: 20px;
  text-decoration: none;
  color: black;

  &.active {
    color: #fff;
  }
`;
