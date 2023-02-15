import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const Home = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if(user) {
            setAuthUser(user);
        }else{
            setAuthUser(null);
        }
      });

      return() => {
        listen();
      }
    }, [authUser]);

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("signed out successfully");
        } catch (error) {
            console.log(error.message);
        }
    }
    
  return (
    <div>
        {
            authUser
            ? (<>
                <p>Signed in as {authUser.email}</p>
                <button onClick={logout} className='btn btn-primary'>Sign Out</button>
                </>
              )
            : (
                <>
                    <Link className='btn btn-success' to="/signIn" >SignIn</Link>
                    <Link className='btn btn-success' to="/signUp" >SignUp</Link>
                </>
            )
        }
    </div>
  )
}

export default Home