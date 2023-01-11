import { useState } from 'react';
import Cookies from 'universal-cookie';
import {signOut } from 'firebase/auth'

import './App.css';
import Auth from './components/Auth';
import Chat from './components/Chat';
import Room from './components/Room';
import { auth } from './firebase-config'; 

const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);

  const signOutUser = async () => {
    await signOut(auth);
    cookies.remove('auth-token');
    setIsAuth(false);
    setRoom(null);
  }


  return (
    <div className="App">
      {!isAuth
        ? <Auth setIsAuth={ setIsAuth} />
        : <>
          {room
            ? <Chat room={room}/>
            : <Room setRoom={setRoom } />
          }
          <div className="sign-out">
            <button onClick={signOutUser}>Sign Out</button>
          </div>
          </>
      }        
      
      
   
    </div>
  );
}

export default App;
