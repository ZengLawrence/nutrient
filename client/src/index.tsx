import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './components/App';
import {startMockApiServer} from './mocks/api';


if (process.env.NODE_ENV === "development") {
    console.log('starting API mock server');
    startMockApiServer();
  };


ReactDOM.render(
    <App />,
   document.getElementById('root')
);