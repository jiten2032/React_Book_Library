import React, { Component } from 'react'

export class Addbook extends Component {
    state = {

        Name: null,
        Author: null,
        Genres: null,
        Year: null,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state);
        this.props.addBook(this.state) ;

        this.setState({
            Name: '',
            Author: '',
            Genres: '',
            Year: '',

        })


    }

    render() {
        // console.log(this.state);
        return (
            <div className="addbook">
                <div className="container mt-5 text-primary">
                    <form id="form" onSubmit={this.handleSubmit}>
                        <div className="form-group row my-2">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">Book Name :</label>
                            <div className="col-sm-10 ">
                                <input type="text"  className="form-control" value={this.state.Name} id="Name" onChange={this.handleChange}  />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="Author" className="col-sm-2 col-form-label">Book Author :</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={this.state.Author} id="Author" onChange={this.handleChange}  />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor=" Genres" className="col-sm-2 col-form-label">Book Geners :</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" value={this.state.Genres} id="Genres" onChange={this.handleChange}  />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="Year" className="col-sm-2 col-form-label">Book Published Year :</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" value={this.state.Year} id="Year" onChange={this.handleChange}  />
                            </div>
                        </div>


                        <div className="form-group row my-5">
                            <div className="col-sm-10">
                                <button type="submit" id="Submit" className="btn btn-primary">Add Book</button>
                            </div>
                        </div>
                    </form>
                </div>
                <hr className="mt-5"></hr>
            </div>
        )
    }
}

export default Addbook
