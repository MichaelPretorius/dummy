import styled from 'styled-components';
import { below, getColor, getFlex } from './utils';

export const Card = styled.div`
  display: flex;
  background: ${props => getColor(props, '#fff')};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${props => (props.row ? getFlex(props) : 'center')};
  align-items: ${props => (props.row ? 'center' : getFlex(props))};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
  border-radius: 5px;
  width: ${({ fill }) => (fill ? '100%' : '40%')};
  ${below.xs`
    width: 100%;
  `};
  border: 1px solid #f3f1f1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 1em;
  margin: 0.5em;

  &:hover {
    box-shadow: 4px 4px 18px -6px;
  }
`;
Card.displayName = 'Card';
