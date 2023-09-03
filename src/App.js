import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () =>{
  return(
    <>
      <Navbar/>
      <Main/>
      <Footer/>
    </>
  );
}
export default App;