import styled from 'styled-components';
import { getColor, getPosition, below } from './utils';

export const Display = styled.h1`
  font-weight: 300;
  font-size: 2.5rem;
  ${below.sm`
    font-size: 2.1rem;
  `};
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
`;

export const Header = styled.h2`
  text-align: ${props => getPosition(props)};
  font-weight: 600;
  font-size: 2.25rem;
  ${below.sm`
    font-size: 2rem;
  `};
  color: ${props => getColor(props)};
`;

export const Title = styled.h3`
  font-size: 1.7em;
  font-weight: 600;
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
`;

export const Headline = styled.p`
  font-size: 1.5rem;
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
`;

export const Body = styled.p`
  font-size: 1rem;
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
`;

export const Caption = styled.p`
  color: ${props => getColor(props)};
  text-align: ${props => getPosition(props)};
  font-size: 0.8rem;
  margin: 8px;
  color: darkgray;
`;
