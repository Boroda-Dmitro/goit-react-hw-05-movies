import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Loader } from './Loader/Loader';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;



const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </ul>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </nav>
  );
};

export default Layout;
