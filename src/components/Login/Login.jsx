import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Label, InputField } from '../../styles';
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
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <Label>
          Email
          <InputField
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <InputField
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Button submit primary>
          Log In
        </Button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { loginUser }
)(Login);
