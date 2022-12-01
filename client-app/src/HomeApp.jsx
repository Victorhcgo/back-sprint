import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import TableOrder from './components/TableOrder'

export default function () {
    return (
        <>
            <NavBar />
            <main>
                <div className='d-flex justify-content-end  mb-2'>
                    <form className="d-flex align-items-center">
                        <input className="form-control me-sm-2 search" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <TableOrder />
            </main>

            <Footer />

        </>
    )
}
