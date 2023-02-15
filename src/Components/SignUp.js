import React from 'react'

const SignUp = () => {
  return (
    <div className='container d-flex my-3 flex-wrap' style={{width: '100%'}}>
      <div class="card shadow me-5 overflow-hidden rounded-3 flex-shrink-0" style={{width: "300px"}}>
        <div className='text-light p-3' style={{height: '100px', backgroundColor: 'rgb(1,180,228)'}}>
          <h5 className='fw-bold'>Benefits of being a <br/> member</h5>
        </div>
        <div class="card-body px-4 m-0 py-2 d-flex align-items-start">
          <img className='me-2' style={{width: '20px'}} src="https://img.icons8.com/glyph-neue/64/null/checkmark.png"/>
          <p class="card-text fw-semibold">
          Find something to watch on your subscribed streaming services
          </p>
        </div>
        <div class="card-body px-4 m-0 py-2 d-flex align-items-start">
          <img className='me-2' style={{width: '20px'}} src="https://img.icons8.com/glyph-neue/64/null/checkmark.png"/>
          <p class="card-text fw-semibold">
          Log the movies and TV shows you have watched
          </p>
        </div>
        <div class="card-body px-4 m-0 py-2 d-flex align-items-start">
          <img className='me-2' style={{width: '20px'}} src="https://img.icons8.com/glyph-neue/64/null/checkmark.png"/>
          <p class="card-text fw-semibold">
          Keep track of your favourite movies and TV shows and get recommendations from them
          </p>
        </div>
        <div class="card-body px-4 m-0 py-2 d-flex align-items-start">
          <img className='me-2' style={{width: '20px'}} src="https://img.icons8.com/glyph-neue/64/null/checkmark.png"/>
          <p class="card-text fw-semibold">
          Build and maintain a personal watchlist
          </p>
        </div>
        <div class="card-body px-4 m-0 py-2 d-flex align-items-start">
          <img className='me-2' style={{width: '20px'}} src="https://img.icons8.com/glyph-neue/64/null/checkmark.png"/>
          <p class="card-text fw-semibold">
          Build custom mixed lists (movies and TV)
          </p>
        </div>
        <div class="card-body px-4 m-0 py-2 d-flex align-items-start">
          <img className='me-2' style={{width: '20px'}} src="https://img.icons8.com/glyph-neue/64/null/checkmark.png"/>
          <p class="card-text fw-semibold">
          Take part in movie and TV discussions
          </p>
        </div>
        <div class="card-body px-4 m-0 py-2 d-flex align-items-start">
          <img className='me-2' style={{width: '20px'}} src="https://img.icons8.com/glyph-neue/64/null/checkmark.png"/>
          <p class="card-text fw-semibold">
          Contribute to, and improve the information in our database
          </p>
        </div>
      </div>
      <form >
        <h4 className='fw-bold'>Signup for an account</h4>
        <p className='fw-semibold'>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <p className='fw-semibold my-5'>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
        <button type="submit" class="btn btn-primary px-4 fw-bold fs-6 border-0" style={{backgroundColor: 'rgb(1,180,228)'}}>Sign Up</button>
        <a href="/" className='ms-3 fw-semibold text-decoration-none' style={{color: 'rgb(1,180,228)'}}>Cancel</a>
      </form>
    </div>
  )
}

export default SignUp