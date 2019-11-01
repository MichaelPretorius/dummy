import styled, { css } from 'styled-components';

export const getColor = (props, defaultColor) => {
  if (props.color) {
    return props.color;
  }
  if (props.primary) {
    return props.theme.primaryColor;
  }
  if (props.secondary) {
    return props.theme.secondaryColor;
  }
  if (props.accent) {
    return props.theme.accentColor;
  }
  if (props.grayScale) {
    return props.theme.grayScaleColor;
  }

  return defaultColor || props.theme.grayScaleColor;
};

export const getPosition = (props, defaultPosition) => {
  if (props.center) {
    return 'center';
  }
  if (props.right) {
    return 'right';
  }
  if (defaultPosition) {
    return defaultPosition;
  }

  return 'left';
};

export const getFlex = (props, defaultPosition) => {
  if (props.start) {
    return 'flex-start';
  }
  if (props.end) {
    return 'flex-end';
  }
  if (props.around) {
    return 'space-around';
  }
  if (props.between) {
    return 'space-between';
  }
  if (props.evenly) {
    return 'space-evenly';
  }
  if (defaultPosition) {
    return defaultPosition;
  }

  return 'center';
};

const sizes = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904,
};

export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const Container = styled.div`
  max-width: ${({ fillWidth }) => (fillWidth ? '100%' : '80%')};
  ${below.xs`
    max-width: 90%;
  `};
  margin: 50px auto 0;
  height: ${({ fill }) => (fill ? '100vh' : null)};
`;
Container.displayName = 'Container';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${props => (props.row ? getFlex(props) : 'center')};
  align-items: ${props => (props.row ? 'center' : getFlex(props))};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
`;
Wrapper.displayName = 'Wrapper';
