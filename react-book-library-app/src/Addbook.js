import React, { Component } from 'react'

export class Addbook extends Component {
    render() {
        return (
            <div className="addbook">
                <div className="container mt-5 text-primary">
                    <form id="form ">
                        <div className="form-group row my-2">
                            <label htmlFor="inputName" className="col-sm-2 col-form-label">Book Name :</label>
                            <div className="col-sm-10 ">
                                <input type="text" className="form-control " id="inputName" />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="inputAuthor" className="col-sm-2 col-form-label">Book Author :</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="inputAuthor" className="col-sm-2 col-form-label">Book Geners :</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputAuthor" />
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="inputAuthor" className="col-sm-2 col-form-label">Book Published Year :</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="inputAuthor" />
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
