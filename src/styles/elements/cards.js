import React from 'react';
import styled from 'styled-components';
import { below, getColor, getFlexJustify, getFlexAlign } from './utils';

export const Card = styled(
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
    wrap,
    fill,
    color,
    primary,
    secondary,
    accent,
    grayScale,
    ...rest
  }) => <div {...rest} />
)`
  display: flex;
  background: ${props => getColor(props, '#fff')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${props => getFlexJustify(props)};
  align-items: ${props => getFlexAlign(props)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
  border-radius: 5px;
  box-sizing: border-box;
  width: ${({ fill }) => (fill ? 'auto' : '40%')};
  ${below.xs`
    width: 100%;
    margin: 0.5em 0;
  `};
  border: 1px solid #f3f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 0.5em;
  margin: 0.5em;

  &:hover {
    box-shadow: 4px 4px 18px -6px;
  }
`;
Card.displayName = 'Card';
