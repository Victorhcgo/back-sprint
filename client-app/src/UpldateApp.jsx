import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default function UpldateApp() {
  return (
    <>
      <NavBar />
      <main className='pb-5'>
        <form className='from-create center'>
          <div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">Fecha</label>
              <input type="date" className="form-control-create" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <p>Datos del paquete</p>
            <div className='d-grid'>
              <div className="input-group mb-3 ">
                <label htmlFor="ancho" className=''>Ancho</label>
                <input type="number" id='ancho' className="form-control-create" aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className="input-group mb-3 ">
                <label htmlFor="largo" className=''>Largo</label>
                <input type="number" id='largo' className="form-control-create" aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className="input-group mb-3 ">
                <label htmlFor="alto" className=''>Alto</label>
                <input type="number" id='alto' className="form-control-create" aria-label="Amount (to the nearest dollar)" />
              </div>
            </div>
            <div className='d-flex'>
              <div className='d-flex align-items-center'>
                <label htmlFor="weight" className=''>Peso</label>
                <input type="number" className="form-control-create" id='weight' aria-label="Amount (to the nearest dollar)" />
              </div>

            </div>
            <br />
            <p>Datos de quien envia</p>
            <div className='d-grid'>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="address" className=''>Direccion</label>
                <input type="text" className="form-control-create" id='address' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="city" className=''>Ciudad</label>
                <input type="text" className="form-control-create" id='city' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="name" className=''>Nombre</label>
                <input type="text" className="form-control-create" id='name' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="cc" className=''>Cedula</label>
                <input type="text" className="form-control-create" id='cc' aria-label="Amount (to the nearest dollar)" />
              </div>
            </div>

            <br />
            <p>Datos de quien recibe</p>
            <div className='d-grid'>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="address" className=''>Direccion</label>
                <input type="text" className="form-control-create" id='address' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="city" className=''>Ciudad</label>
                <input type="text" className="form-control-create" id='city' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="name" className=''>Nombre</label>
                <input type="text" className="form-control-create" id='name' aria-label="Amount (to the nearest dollar)" />
              </div>
              <div className='d-flex align-items-center mt-3'>
                <label htmlFor="cc" className=''>Cedula</label>
                <input type="text" className="form-control-create" id='cc' aria-label="Amount (to the nearest dollar)" />
              </div>

              <div className='d-flex  align-items-center mx-5'>
                <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Sensitive Merchandise
                </label>
              </div>
            </div>
            <button type="button" class="btn btn-outline-success">Enviar</button>
          </div>

        </form>
      </main>
      <Footer />
    </>
  )
}
