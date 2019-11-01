import styled from 'styled-components';
import { getColor, below } from './utils';

export const Button = styled.button`
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
  ${below.xs`
    padding: ${({ small }) => (small ? '5px 8px' : '14px 25px')};
  `};
  background: ${props => getColor(props)};
  float: ${({ right }) => (right ? 'right' : null)};

  &:hover {
    transition: 0.2s ease-in;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.17), 0 8px 16px rgba(0, 0, 0, 0.17);
  }
`;

export const FloatingActionButton = styled(Button)`
  width: 65px;
  height: 65px;
  margin: 0.3em;
  padding: 10px;
  border-radius: 50%;
  font-size: 1.4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.17), 0 3px 6px rgba(0, 0, 0, 0.17);
`;

export const LabelButton = styled(Button)`
  color: ${props => getColor(props)};
  background: transparent;

  &:hover {
    box-shadow: none;
    border-bottom: 3px solid ${props => getColor(props)};
    transition: none;
  }
`;

export const GroupButton = styled(Button)`
  margin: 0;
`;
