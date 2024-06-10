import React from 'react';

import Todo from './Components/Todo';
import { SettingsProvider } from './Context/SettingsContext';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <Todo />
      </SettingsProvider>
    );
  }
}