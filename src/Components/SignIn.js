import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {auth} from '../firebase'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const {user} = await signInWithEmailAndPassword(auth, email, password);
      if(user.accessToken){
        navigate('/');
        toast('Signed In Successfully');
      }
    } catch (error) {
      console.log(error.message)
      toast(error.message);
    }
  }
  return (
    <div>
        <form onSubmit={submitHandler} className='w-100'>
        <h4 className='fw-bold'>Login to your account</h4>
        <p className='fw-semibold'>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <a href='/' className='fw-semibold' style={{color: 'rgb(1,180,228)'}}>Click here</a> to get started.</p>
        <p className='fw-semibold'>If you signed up but didn't get your verification email, <Link to='/' className='fw-semibold' style={{color: 'rgb(1,180,228)'}}>click here</Link> to have it resent.</p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary px-3 fw-bold fs-6 border-0" style={{backgroundColor: 'rgb(1,180,228)'}}>Login</button>
        <Link to="/" className='ms-3 fw-semibold text-decoration-none' style={{color: 'rgb(1,180,228)'}}>Reset password</Link>
      </form>
    </div>
  )
}

export default SignIn