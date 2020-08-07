import React from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Menu from './components/menu'
import AppRouter from './routes/app.routes'

function App() {
  return (
    <div style = {{width:'100%'}}>
      <Header/>
      <Menu/>
      <AppRouter/>
    </div>
  );
}

export default App;
