import React from 'react';


export default function Books() {
    return (
        <div class="container mt-5 ">
        <table id="table" class="table table-hover">
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
    )
}
