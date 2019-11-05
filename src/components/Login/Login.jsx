import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Form, Button, Label, InputField, Header, Wrapper } from '../../styles';
import { loginUser } from '../../redux/auth/authActions';

export const Login = ({ history, loginUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = credentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials(credentials => ({
      ...credentials,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await loginUser(email, password, () => {
      setCredentials({
        email: '',
        password: '',
      });
      history.push('/');
    });
  };

  return (
    <>
      <Header center secondary>
        Log In
      </Header>
      <Wrapper>
        <Form onSubmit={handleSubmit} alignEnd>
          <Label secondary>
            Email
            <InputField
              required
              transition
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Label>
          <Label secondary>
            Password
            <InputField
              required
              transition
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Label>
          <Button submit primary>
            Log In
          </Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default connect(
  null,
  { loginUser }
)(Login);
