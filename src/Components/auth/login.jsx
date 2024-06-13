import React, { useState } from 'react';
import {When} from 'react-if';

import { useLogin } from './context';

const Login = () => {
    const { loggedIn, login, logout } = useLogin();
    const [credentials, setCredentials] = useState({ username: '', password: '' });
  
    const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      login(credentials.username, credentials.password);
    };

    return (
        <>
          <When condition={loggedIn}>
            <button onClick={logout}>Log Out</button>
          </When>
    
          <When condition={!loggedIn}>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="UserName"
                name="username"
                onChange={handleChange}
              />
              <input
                placeholder="Password"
                name="password"
                onChange={handleChange}
                type="password"
              />
              <button>Login</button>
            </form>
          </When>
        </>
      );
    };
    
    export default Login;