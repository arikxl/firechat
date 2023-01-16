import React from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { signInWithPopup } from 'firebase/auth'

import { auth, provider} from '../firebase-config';

const AuthStyled = styled.section`
  text-align: center;
  justify-content: center;
  margin-top:100px ;
`;

const AuthBtn = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: #F5820B;
    color: white;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;

    :hover {
        background-color:#FFCB2B;
    }
`
const cookies = new Cookies();

const Auth = ({ setIsAuth }) => {

    const signInGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('result:', result)
            cookies.set('auth-token', result.user.refreshToken) 
            setIsAuth(true)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <AuthStyled>
            <p>Sign in with Google to connect</p>
            <AuthBtn onClick={signInGoogle}>Sign In</AuthBtn>
        </AuthStyled>
    )
}

export default Auth