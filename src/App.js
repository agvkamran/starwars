import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Container />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
