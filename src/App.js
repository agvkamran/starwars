import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';
import People from './components/peoplePage/people';
import Person from './components/peoplePage/person';
import Planets from './components/planets/planets';
import Planet from './components/planets/planet';
import Starships from './components/starships/starships';
import Starship from './components/starships/starship';
import peoplePage from './components/peoplePage/people';

class App extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route exact path='/people' component={People} />
          <Route path='/people/:id' component={Person} />
          <Route exact path='/planets' component={Planets} />
          <Route path="/planets/:id" component={Planet} />
          <Route exact path='/starships' component={Starships} />
          <Route path='/starships/:id' component={Starship} />
          <Route exact path='/' component={Container} />
          <Route exact path='/peoplePage' component={peoplePage} />
          <div className='foot'>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

