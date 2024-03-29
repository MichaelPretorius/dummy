import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getColor, below } from './utils';

export const Button = styled(
  ({
    small,
    round,
    fill,
    right,
    color,
    primary,
    secondary,
    accent,
    grayScale,
    submit,
    ...rest
  }) => <button type={submit ? 'submit' : 'button'} {...rest} />
)`
  padding: ${({ small }) => (small ? '7px 14px' : '18px 32px')};
  border-radius: ${({ round }) => (round ? '20px' : '0')};
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  margin: 0.5em;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: center;
  width: ${({ fill }) => (fill ? '100%' : 'auto')};
  background: ${props => getColor(props)};
  float: ${({ right }) => (right ? 'right' : null)};
  ${below.xs`
    padding: ${({ small }) => (small ? '5px 8px' : '14px 25px')};
  `};
  &:hover {
    transition: 0.2s ease-in;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.17), 0 8px 16px rgba(0, 0, 0, 0.17);
  }
`;
Button.displayName = 'Button';

export const LinkButton = ({ to, children, ...props }) => (
  <Link to={to}>
    <Button {...props}>{children}</Button>
  </Link>
);

export const FloatingActionButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  margin: 0.3em;
  border-radius: 50%;
  font-size: 1.4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.17), 0 3px 6px rgba(0, 0, 0, 0.17);
`;
FloatingActionButton.displayName = 'FloatingActionButton';

export const LabelButton = styled(Button)`
  color: ${props => getColor(props)};
  background: transparent;

  &:hover {
    box-shadow: none;
    border-bottom: 3px solid ${props => getColor(props)};
    transition: none;
  }
`;
LabelButton.displayName = 'LabelButton';

export const GroupButton = styled(Button)`
  margin: 0;
`;
GroupButton.displayName = 'GroupButton';
