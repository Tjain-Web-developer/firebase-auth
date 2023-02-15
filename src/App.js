import React from 'react'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'

const App = () => {
  return (
    <div className='container'>
      <SignUp/>
      <SignIn/>
    </div>
  )
}

export default App