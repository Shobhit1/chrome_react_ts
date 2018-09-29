import * as React from 'react';
import './main.css';
import { ToDo } from './ToDo';

class App extends React.Component {
  public render() {
    return (
      <ToDo text={''} value={''} />
    );
  }
}

export default App
