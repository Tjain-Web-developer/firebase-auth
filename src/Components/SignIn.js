import React from 'react'

const SignIn = () => {
  return (
    <div>
        <form className='w-100'>
        <h4 className='fw-bold'>Login to your account</h4>
        <p className='fw-semibold'>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <a href='/' className='fw-semibold' style={{color: 'rgb(1,180,228)'}}>Click here</a> to get started.</p>
        <p className='fw-semibold'>If you signed up but didn't get your verification email, <a href='/' className='fw-semibold' style={{color: 'rgb(1,180,228)'}}>click here</a> to have it resent.</p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-primary px-3 fw-bold fs-6 border-0" style={{backgroundColor: 'rgb(1,180,228)'}}>Login</button>
        <a href="/" className='ms-3 fw-semibold text-decoration-none' style={{color: 'rgb(1,180,228)'}}>Reset password</a>
      </form>
    </div>
  )
}

export default SignIn