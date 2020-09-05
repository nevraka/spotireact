import React from 'react';
import { loginUrl } from '../api/spotify';

const Login = () => {
  return (
    // <div>
    //   <img src="..." alt="" />
    // </div>
    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
  );
};

export default Login;
