import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import  {GlobalTheme} from "./styles/theme"



import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    background: ${GlobalTheme.colors.blackGradient};
    color: ${GlobalTheme.colors.white};
    font-family: 'circular-std', sans-serif;
    margin:0 auto;
    
  }
`




ReactDOM.render(
  <React.StrictMode>
        <GlobalStyle/>
        <App/>
          
        
        
      
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
