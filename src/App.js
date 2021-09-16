import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';
import People from './components/people/people';
import About from './components/about/about';

class App extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route path='/people' component={People} />
          <Route exact path='/' component={Container} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

