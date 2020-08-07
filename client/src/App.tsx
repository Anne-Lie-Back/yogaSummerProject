import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Menu from './components/menu'
import AppRouter from './routes/app.routes'

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <AppRouter/>
    </div>
  );
}

export default App;
