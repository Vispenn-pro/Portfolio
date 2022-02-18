import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {text} from './constantes/context';

export const TextContext = createContext(text);

ReactDOM.render(
  <React.StrictMode>
    <TextContext.Provider value={text}>
      <App />
    </TextContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
