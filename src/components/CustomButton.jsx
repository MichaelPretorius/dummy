import React from 'react';

export const SubmitButton = ({ children, ...props }) => {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
};

export const NormalButton = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
