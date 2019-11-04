import styled from 'styled-components';
import { getColor, getPosition, below } from './utils';

export const Display = styled.h1`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-weight: 300;
  font-size: 2.5rem;
  ${below.sm`
    font-size: 2.1rem;
  `};
`;
Display.displayName = 'Display';

export const Header = styled.h2`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-weight: 600;
  font-size: 2.25rem;
  ${below.sm`
    font-size: 2rem;
  `};
`;
Header.displayName = 'Header';

export const Title = styled.h3`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: 1.7em;
  font-weight: 600;
`;
Title.displayName = 'Title';

export const Headline = styled.p`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: 1.5rem;
`;
Headline.displayName = 'Headline';

export const Body = styled.p`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: 1rem;
`;
Body.displayName = 'Body';

export const Caption = styled.p`
  color: ${props => getColor(props)};
  text-align: ${props => getPosition(props)};
  font-size: 0.8rem;
  margin: 8px;
  color: darkgray;
`;
Caption.displayName = 'Caption';
