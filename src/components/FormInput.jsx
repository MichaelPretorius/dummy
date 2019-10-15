import React from 'react';

const FormInput = ({ label, handleChange, ...props }) => {
  return (
    <div>
      {label ? (
        <label>
          {label}
          <input {...props} onChange={handleChange} />
        </label>
      ) : (
        <input {...props} onChange={handleChange} />
      )}
    </div>
  );
};

export default FormInput;
