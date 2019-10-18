import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput';
import { SubmitButton } from './CustomButton';
import { signUpUser } from '../redux/auth/authActions';

const INITIAL_STATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Signup = ({ history, signUpUser }) => {
  const [credentials, setCredentials] = useState(INITIAL_STATE);

  const { displayName, email, password, confirmPassword } = credentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials(credentials => ({
      ...credentials,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return null;
    }

    await signUpUser(email, password, { displayName }, () => {
      setCredentials(INITIAL_STATE);
      history.push('/');
    });
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          label="User Name"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="email"
          label="Email"
          name="email"
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="password"
          label="Password"
          name="password"
          value={password}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
        />
        <SubmitButton>Sign Up</SubmitButton>
      </form>
    </>
  );
};

export default connect(
  null,
  { signUpUser }
)(Signup);
