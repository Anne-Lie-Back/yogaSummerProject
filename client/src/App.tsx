import React from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Menu from './components/menu'
import AppRouter from './routes/app.routes'
import ContactFooter from './components/ContactFooter'
import Footer from './components/Footer'

function App() {
  return (
    <div style = {{width:'100%'}}>
      <Header/>
      <Menu/>
      <AppRouter/>
      <ContactFooter/>
      <Footer/>
    </div>
  );
}

export default App;
