import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor, below } from './utils';

export const NavContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  z-index: 2;
  width: 100%;
  height: 58px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px 24px;
  background-color: ${props => getColor(props)};
  ${below.sm`
    flex-direction: column;
    align-items: flex-start;
    height: 50px;
  `};
`;
NavContainer.displayName = 'NavContainer';

export const Burger = styled.img`
  display: none;
  height: 100%;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
  color: #fff;
  ${below.sm`
    display: block;
  `};
`;
Burger.displayName = 'Burger';

export const NavBrand = styled(Link)`
  height: 100%;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: white;
`;
NavBrand.displayName = 'NavBrand';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 1;
  width: 100%;
  ${below.sm`
    flex-direction: column;
    height: 100vh;
    width: 200px;
    padding: 8px 0;
    justify-content: start;
    position: absolute;
    background-color: ${props => getColor(props)};
    left: ${({ showNav }) => (showNav ? '0' : '-200px')};
    top: 50px;
  `};
`;
Navbar.displayName = 'Navbar';

export const Navs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  ${below.sm`
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    align-items: stretch;
    margin: 0;
    width: 100%;
  `};
`;
Navs.displayName = 'Navs';

export const Nav = styled(Link)`
  font-size: 1.2rem;
  margin-right: 25px;
  color: white;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
  ${below.sm`
    margin: 10px;
  `};
`;
Nav.displayName = 'Nav';
