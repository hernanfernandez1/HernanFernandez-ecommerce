import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCj_fmsaWDsBV4HZ9pWu43fM08PnzzQJFU",
  authDomain: "coderhouse-ecommerce-5df39.firebaseapp.com",
  projectId: "coderhouse-ecommerce-5df39",
  storageBucket: "coderhouse-ecommerce-5df39.appspot.com",
  messagingSenderId: "872571524903",
  appId: "1:872571524903:web:a774ba2de2381646887b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
