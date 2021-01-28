import React, { Component } from 'react';
import Addbook from './Addbook';
import Books from './Books';
export class App extends Component {
  state = {
    BooksLibrary: [
      { Sl: 1, Name: 'The Guide', Author: 'R. K. Narayan', Genres: 'Indian Classic', Year: 1958 },
      { Sl: 2, Name: 'The Private Life of an Indian Prince', Author: 'Mulk Raj Anand', Genres: 'Indian Classic', Year: 1953 }
    ]
  }
  deletbook = (book) => {
    // console.log(book);
    let BooksLibrary = this.state.BooksLibrary.filter(Mybooks => {

      return (
        Mybooks.Sl !== book
      )
    })

    this.setState({
      BooksLibrary: BooksLibrary
    })
  }

  addBook = (addbooks) => {
    // console.log(addbooks);
    addbooks.Sl = Math.random() ;
    let BooksLibrary = [...this.state.BooksLibrary,addbooks] ;
    this.setState({
      BooksLibrary: BooksLibrary
    })

  }

  render() {
    const { BooksLibrary } = this.state;
    return (
      <div className="container my-5">
        <h1 className="text-center text-primary">Book Library</h1>
        <Addbook addBook={this.addBook} />
        <Books deletbook={this.deletbook} Mylibrary={BooksLibrary} />
      </div>
    )
  }
}

export default App

