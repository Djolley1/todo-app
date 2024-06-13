import React from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/auth/login.jsx';
import Auth from './Components/auth/auth.jsx';

const App = () => (
  <>
    <Header />
    <Login />
    <Auth capability="read">
      <Todo />
    </Auth>
    <Footer />
  </>
);

export default App;
