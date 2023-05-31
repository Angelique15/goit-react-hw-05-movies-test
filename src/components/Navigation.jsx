import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationContainer,
  MenuContainer,
  MenuItem
} from '../styles/NavigationStyles';

const Navigation = () => {
  const location = useLocation();

  return (
    <NavigationContainer>
      <MenuContainer>
        <MenuItem active={location.pathname === '/'}>
          <Link to="/">HOME</Link>
        </MenuItem>
        <MenuItem active={location.pathname.includes('/movies')}>
          <Link to="/movies">MOVIES</Link>
        </MenuItem>
      </MenuContainer>
    </NavigationContainer>
  );
};

export default Navigation;
