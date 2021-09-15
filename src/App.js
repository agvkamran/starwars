import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';
import About from './components/about/about';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route exact path='/' component={Container} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
