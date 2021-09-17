import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Container from './components/container/container';
import Footer from './components/footer/footer';
import People from './components/people/people';
import About from './components/about/about';

class App extends React.Component {

  constructor(props) {
    super();
    // this.state = {
    //   people: []
    // }
  }

  // getLocation = () => {

  // }

  // api = async () => {
  //   const response = await fetch('https://swapi.dev/api/people/?page=1')
  //     .then((response) => {
  //      return response.json()
  //     })
  //     .then((data) => {
  //       return data
  //     })
  //   this.setState({
  //     people: response.results
  //   })
  // }

  // api = async () => {
  //   const response = await fetch(`https://swapi.dev/api/${planets}/?page={4}`)
  //     .then((response) => {
  //      return response.json()
  //     })
  //     .then((data) => {
  //       return data
  //     })
  //   this.setState({
  //     people: response.results
  //   })
  // }




  // componentDidMount() {
  //   this.api()
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          {/* <Route path='/people' render={() => <People people={this.state.people} />} /> */}
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

