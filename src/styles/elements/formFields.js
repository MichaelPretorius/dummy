import React from 'react';
import styled from 'styled-components';
import { getColor } from './utils';

export const InputField = styled(
  ({
    fill,
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
  width: ${({ fill }) => (fill ? '100%' : 'auto')};
  padding: ${({ small }) => (small ? '7px 12px' : '16px')};
  font-size: 1rem;
  outline: none;
  display: inline-block;
  margin: 0.4rem;
  color: ${props => getColor(props)};
  border: none;
  border-bottom: 2px solid ${props => props.theme.secondaryColor};
  border-radius: 0;

  &:focus {
    padding: ${props => (props.transition ? '1.4em' : null)};
    transition: ${props => (props.transition ? '0.5s ease-in' : null)};
    border-color: ${props => getColor(props)};
  }
`;
InputField.displayName = 'InputField';

export const Label = styled(
  ({ color, primary, secondary, accent, grayScale, ...rest }) => (
    <label {...rest} />
  )
)`
  font-size: 0.8rem;
  color: ${props => getColor(props)};
  margin: 0 1rem;
`;
Label.displayName = 'Label';
