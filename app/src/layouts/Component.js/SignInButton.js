import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const SignInButton = () => {
  const history = useHistory()

  return (
    <Button onClick={() => history.push('/signin')} type="primary">Sign In</Button>
  );
}

export default SignInButton;