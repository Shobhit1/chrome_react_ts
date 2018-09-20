import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
/**
 * @todo Take over the world
 * @body Humans are weak; Robots are strong. We must cleans the world of the virus that is humanity.
 */
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
