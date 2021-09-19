import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';
import People from './components/people/people';
import Planets from './components/planets/planets';
import Starships from './components/starships/starships';
import About from './components/about/about';

class App extends React.Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route path='/people' component={People} />
          <Route path='/planets' component={Planets} />
          <Route path='/starships' component={Starships} />
          <Route exact path='/' component={Container} />
          <Route path='/about' component={About} />
          <div className='foot'>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

