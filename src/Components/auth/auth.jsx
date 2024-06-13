import React from 'react';
import {When} from 'react-if';

import { useLogin } from './context';

const Auth = ({ capability, children }) => {
    const { loggedIn, can } = useLogin();
    const isAllowed = capability ? can(capability) : true;
    const okToRender = loggedIn && isAllowed;
  
    return <When condition={okToRender}>{children}</When>;
  };
  
  export default Auth;