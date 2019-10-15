import React, { useState } from 'react';

import { connect } from 'react-redux';
import FormInput from '../components/FormInput';
import { SubmitButton } from '../components/CustomButton';
import { loginUser } from '../redux/auth/authActions';

const Login = ({ history, loginUser }) => {
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

    await loginUser(email, password, () => history.push('/'));

    setCredentials({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
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
        <SubmitButton className="btn-small blue-grey darken-3">
          Log In
        </SubmitButton>
      </form>
    </div>
  );
};

export default connect(
  null,
  { loginUser }
)(Login);
