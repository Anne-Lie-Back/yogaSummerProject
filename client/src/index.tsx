import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import Layout from './components/Layout'

ReactDOM.render(
  
    <Layout> 
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
    </Layout>

  ,
  document.getElementById('root')
);
