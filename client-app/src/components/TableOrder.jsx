import React from 'react'

export default function TableOrder() {
    return (
        <>
            <table className="table table-hover table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="table-primary">
                        <th scope="row">Primary</th>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>Column content</td>
                        <td>
                            <button type="button" className="btn btn-outline-danger mx-1">Delete</button>
                          <a href="/update-order"><button type="button" className="btn btn-outline-success mx-1">Update</button></a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}
