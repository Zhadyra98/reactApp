import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';


// const text ='hello';
// const elem = (
//   <div>
//     <h2>ТексТ: {text}</h2>
//     <input type="password" />
//     <button tabIndex="0">Click</button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

