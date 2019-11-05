import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Form, Button, Label, InputField, Header, Wrapper } from '../../styles';
import { signUpUser } from '../../redux/auth/authActions';

const INITIAL_STATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const Signup = ({ history, signUpUser }) => {
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
      // alert("Passwords don't match!");
      return null;
    }

    await signUpUser(email, password, { displayName }, () => {
      setCredentials(INITIAL_STATE);
      history.push('/');
    });
  };

  return (
    <>
      <Header center secondary>
        Sign Up
      </Header>
      <Wrapper>
        <Form onSubmit={handleSubmit} alignEnd>
          <Label secondary>
            User Name
            <InputField
              required
              type="email"
              name="displayName"
              value={displayName}
              onChange={handleChange}
            />
          </Label>
          <Label secondary>
            Email
            <InputField
              required
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Label>
          <Label secondary>
            Password
            <InputField
              required
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Label>
          <Label secondary>
            Confirm Password
            <InputField
              required
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          </Label>
          <Button submit primary>
            Sign Up
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default connect(
  null,
  { signUpUser }
)(Signup);
