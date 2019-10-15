import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../components/FormInput';
import { SubmitButton } from '../components/CustomButton';
import { signUpUser } from '../redux/auth/authActions';

const Signup = ({ history, signUpUser }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const {
    displayName,
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  } = credentials;

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

    await signUpUser(
      email,
      password,
      {
        firstName,
        lastName,
        phoneNumber,
        displayName,
      },
      () => history.push('/')
    );

    setCredentials({
      displayName: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
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
          type="text"
          label="First Name"
          name="firstName"
          value={firstName}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="text"
          label="Last Name"
          name="lastName"
          value={lastName}
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
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          value={phoneNumber}
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
        <SubmitButton className="btn-small blue-grey darken-3">
          Sign Up
        </SubmitButton>
      </form>
    </>
  );
};

export default connect(
  null,
  { signUpUser }
)(Signup);
