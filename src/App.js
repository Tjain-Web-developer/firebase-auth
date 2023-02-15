import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App