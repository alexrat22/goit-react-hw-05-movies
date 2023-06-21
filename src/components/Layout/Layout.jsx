import { Outlet } from 'react-router-dom';
import { Header, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
