import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ModelProvider } from "./context/ModelContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="<your_client_id>">
    <ModelProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>{" "}
    </ModelProvider>{" "}
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();