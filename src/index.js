import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'

Amplify.configure(awsExports);

const AppWithAuth = withAuthenticator(App);

ReactDOM.render(
  <React.StrictMode>
      {window.location.hostname === 'localhost' ? <App/> : <AppWithAuth />}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
