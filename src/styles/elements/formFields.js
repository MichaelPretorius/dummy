import React from 'react';
import styled from 'styled-components';
import { getColor, getFlexJustify, getFlexAlign, below } from './utils';

export const Form = styled(
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
  }) => <form {...rest} />
)`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${props => getFlexJustify(props)};
  align-items: ${props => getFlexAlign(props)};
  width: ${({ width }) => width || 'auto'};
  margin: 0.5rem auto;
  padding: 0;
`;
Form.displayName = 'Form';

export const InputField = styled(
  ({
    width,
    small,
    transition,
    color,
    primary,
    secondary,
    accent,
    grayScale,
    ...rest
  }) => <input {...rest} />
)`
  min-width: 300px;
  width: ${({ width }) => width || 'auto'};
  padding: ${({ small }) => (small ? '7px 12px' : '16px')};
  font-size: 1rem;
  outline: none;
  margin: 0.4rem;
  color: ${props => getColor(props)};
  border: none;
  border-bottom: 2px solid ${props => props.theme.secondaryColor};
  border-radius: 0;
  ${below.xs`
    min-width: 250px;
  `};

  &:focus {
    padding: ${props => (props.transition ? '1.3em' : null)};
    transition: ${props => (props.transition ? '0.3s ease-in' : null)};
    border-color: ${props => getColor(props)};
  }
`;
InputField.displayName = 'InputField';

export const Label = styled(
  ({ color, primary, secondary, accent, grayScale, id, ...rest }) => (
    <label htmlFor={id} {...rest} />
  )
)`
  font-size: 0.8rem;
  color: ${props => getColor(props)};
  margin: 0 0;
  width: auto;
  ${below.xs`
    display: flex;
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  `};
`;
Label.displayName = 'Label';
