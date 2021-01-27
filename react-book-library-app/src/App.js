import React, { Component } from 'react';
import Addbook from './Addbook' ;
import Books from './Books' ;

export class App extends Component {

  render() {
    return (
      <div className="container my-5">
         <h1 className="text-center text-primary">Book Library</h1>
         <Addbook />
         <Books />
      </div>
    )
  }
}

export default App

