import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
`;

export const MovieLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
   }
`;

export const MovieList = styled.li`
  list-style: none;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const MovieTitle = styled.p`
  width: 250px;
  text-align: center;
  margin: 0;
  padding: 5px 0;
`;
