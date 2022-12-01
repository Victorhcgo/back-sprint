import React from 'react'

export default function LoginApp() {



  return (
    <div className='form'>
        
        <h1 className='text-center mb-5'>Insta YA</h1>
        <form className='form-login bg-light'>
            <div className='text-center form-title'>
                <h3 className='m-0'>Welcome!</h3>
                <p className='m-0'>Enter your Credentials</p>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Username</label>
                <input type="email" className="form-control form-login-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                <input type="password" className="form-control form-login-input" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remind me
                </label>
            </div>
            <div className=' d-flex flex-row-reverse'>
                <a href="/home"><button type="button" className="btn btn-info mt-3 ">Log in</button></a>
            </div>
            <div className='text-center mt-3'> 
                <p className='mb-0'>You do not have an account?<a href="/register" className='text-info'>Create a new account</a></p>
            </div>
        </form>
    </div>
  )
}
