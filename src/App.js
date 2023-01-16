import Cookies from 'universal-cookie';
import { signOut } from 'firebase/auth'
import { useState } from 'react';

import './App.css';
import { auth } from './firebase-config'; 
import Auth from './components/Auth';
import Chat from './components/Chat';
import Room from './components/Room';
import SignOutBtn from './components/SignOutBtn';

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
            ? <Chat room={room} setRoom={setRoom} signOutUser={ signOutUser} />
            :
            <>
              <Room setRoom={setRoom} />
              <SignOutBtn signOutUser={ signOutUser} /> 
            </>
            }
          
          </>
      }        
    </div>
  );
}

export default App;
