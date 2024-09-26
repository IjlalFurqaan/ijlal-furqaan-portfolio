// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((item) => (
            <NavItem
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                {item}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;