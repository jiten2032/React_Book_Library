import React from 'react';


export default function Books(props) {
    const { Mylibrary , deletbook } = props;
    let librarylist = Mylibrary.length ? (
        Mylibrary.map(library => {
            return (
                <div className="container mt-2" key = {library.Sl}>


                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th scope="row" className="col-md-2">{library.Sl}</th>
                                <td className="col-md-2">{library.Name}</td>
                                <td className="col-md-2">{library.Author}</td>
                                <td className="col-md-2">{library.Genres}</td>
                                <td className="col-md-2">{library.Year}</td>
                                <td className="col-md-2">
                                <button onClick={() => {deletbook(library.Sl)}} type="button" className="btn btn-primary">Delet</button>
                                </td>
                                
                            </tr>
                        </tbody>

                    </table>
                </div>


            )

        })
    ) : (

            <div className="alert alert-danger text-center" role="alert">
             There is no book left !! 
            </div>
        )

    return (
        <div>
            <div className="container mt-5 ">
                <table id="table" className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col-md-2">Sl. No.</th>
                            <th scope="col-md-3">Name</th>
                            <th scope="col-md-3">Author</th>
                            <th scope="col-md-2">Geners</th>
                            <th scope="col-md-2">Published Year</th>
                        </tr>
                    </thead>
                    <tbody id="TableBody"></tbody>
                </table>
            </div>
            {librarylist}
        </div>
    )
}
