import React from 'react';
import styled, { css } from 'styled-components';

export const getColor = (
  { color, primary, secondary, accent, grayScale, theme },
  defaultColor
) => {
  if (color) return color;
  if (primary) return theme.primaryColor;
  if (secondary) return theme.secondaryColor;
  if (accent) return theme.accentColor;
  if (grayScale) return theme.grayScaleColor;
  return defaultColor || theme.grayScaleColor;
};

export const getPosition = ({ center, right, left }, defaultPosition) => {
  if (center) return 'center';
  if (right) return 'right';
  if (left) return 'left';
  if (defaultPosition) return defaultPosition;
  return 'left';
};

export const getFlexJustify = (
  {
    justifyStart,
    justifyEnd,
    justifyAround,
    justifyBetween,
    justifyEvenly,
    justifyCenter,
  },
  defaultPosition
) => {
  if (justifyStart) return 'flex-start';
  if (justifyEnd) return 'flex-end';
  if (justifyAround) return 'space-around';
  if (justifyBetween) return 'space-between';
  if (justifyEvenly) return 'space-evenly';
  if (justifyCenter) return 'center';
  if (defaultPosition) return defaultPosition;
  return 'flex-start';
};

export const getFlexAlign = (
  { alignStart, alignEnd, alignBaseline, alignCenter, alignStretch },
  defaultPosition
) => {
  if (alignStart) return 'flex-start';
  if (alignEnd) return 'flex-end';
  if (alignCenter) return 'center';
  if (alignBaseline) return 'baseline';
  if (alignStretch) return 'stretch';
  if (defaultPosition) return defaultPosition;
  return 'stretch';
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

export const Container = styled(({ fill, fillHeight, ...rest }) => (
  <div {...rest} />
))`
  max-width: ${({ fill }) => (fill ? '100%' : '80%')};
  margin: 0 auto;
  padding-top: 58px;
  height: ${({ fillHeight }) => (fillHeight ? '100vh' : 'auto')};
  ${below.sm`
    max-width: 90%;
    padding-top: 50px;
  `};
`;
Container.displayName = 'Container';

export const Wrapper = styled(
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
    width,
    height,
    row,
    wrap,
    ...rest
  }) => <div {...rest} />
)`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${props => getFlexJustify(props)};
  align-items: ${props => getFlexAlign(props)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
`;
Wrapper.displayName = 'Wrapper';
