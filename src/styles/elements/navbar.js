import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor, getFlex, below } from './utils';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3.5em;
  color: white;
  width: 100%;
  padding: 8px 24px;
  justify-content: space-between;
  background-color: ${props => getColor(props)};
`;

export const NavBrand = styled.h2`
  text-align: center;
`;

export const Navs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${below.sm`
    justify-content: ${props => getFlex(props)};
    align-items: ${props => getFlex(props)};
  `};
  margin-right: 25px;
`;

export const Nav = styled(Link)`
  font-size: 1.2rem;
  margin-right: 20px;
  color: white;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;
