import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getColor, below, getFlexJustify, getFlexAlign } from './utils';

export const NavContainer = styled(
  ({
    justifyStart,
    justifyEnd,
    justifyAround,
    justifyBetween,
    justifyEvenly,
    justifyCenter,
    alignStart,
    alignEnd,
    alignBaseline,
    alignCenter,
    alignStretch,
    row,
    color,
    primary,
    secondary,
    accent,
    grayScale,
    ...rest
  }) => <header {...rest} />
)`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${props => getFlexJustify(props, 'space-between')};
  align-items: ${props => getFlexAlign(props, 'center')};
  color: #fff;
  z-index: 2;
  height: 58px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 24px;
  background-color: ${props => getColor(props)};
  ${below.sm`
    flex-direction: column;
    align-items: flex-start;
    height: 50px;
    padding: 8px 15px;
  `};
`;
NavContainer.displayName = 'NavContainer';

export const Burger = styled.img`
  display: none;
  height: 100%;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
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
  color: #fff;
`;
NavBrand.displayName = 'NavBrand';

export const Navbar = styled(
  ({
    justifyStart,
    justifyEnd,
    justifyAround,
    justifyBetween,
    justifyEvenly,
    justifyCenter,
    alignStart,
    alignEnd,
    alignBaseline,
    alignCenter,
    alignStretch,
    row,
    color,
    primary,
    secondary,
    accent,
    grayScale,
    width,
    showNav,
    ...rest
  }) => <div {...rest} />
)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 1;
  width: 100%;
  ${below.sm`
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${props => getFlexJustify(props)};
    align-items: ${props => getFlexAlign(props)};
    width: ${({ width }) => width || '100%'};
    padding: 8px 0;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: ${({ showNav, width }) => (showNav ? '0' : `-${width}`)};
    background-color: ${props => getColor(props)};
  `};
`;
Navbar.displayName = 'Navbar';

export const Navs = styled(
  ({
    justifyStart,
    justifyEnd,
    justifyAround,
    justifyBetween,
    justifyEvenly,
    justifyCenter,
    alignStart,
    alignEnd,
    alignBaseline,
    alignCenter,
    alignStretch,
    row,
    ...rest
  }) => <div {...rest} />
)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  ${below.sm`
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${props => getFlexJustify(props)};
    align-items: ${props => getFlexAlign(props)};
    margin: 0;
    width: 100%;
  `};
`;
Navs.displayName = 'Navs';

export const Nav = styled(Link)`
  font-size: 1rem;
  margin-right: 25px;
  color: #fff;
  ${below.sm`
    margin: 10px;
  `};
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;
Nav.displayName = 'Nav';
