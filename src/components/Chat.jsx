import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, } from 'firebase/firestore'

import SignOutBtn from './SignOutBtn';
import ExitRoomBtn from './ExitRoomBtn';
import { db, auth } from '../firebase-config';

const ChatStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid #F5820B;

    .messages{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 80%;
        overflow-y: auto;
        padding: 10px;
        margin-bottom: 10px; 

  
    }
      .message{
        display: flex;
        align-items: flex-start;
        margin-bottom: 10px;
        }

        .user{
        font-weight: bold;
        margin-right: 10px;
        color: #333;
        }

`;

const FormStyled = styled.form`
    display: flex;
    width: 100%;
    padding: 10px;

    input{
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        font-size: 16px;
        color: #333;
        padding: 10px;
        border-radius: 5px 0 0 5px;
    }

    button{
        border: none;
        outline: none;
        background: #F5820B;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
        border-radius:6px;
        padding: 0 20px;
    }
`;

const ChatHeader = styled.header`
    background-color: #F5820B;
    color: white;
    width: 100%;
    text-align: center;
    display:flex ;
    justify-content: space-around;
    align-items: center;

    img{
        width:50px;
        height:50px;
        border-radius: 50%;
        margin:5px 0 ;
    }
`
const BtnsContainer = styled.section`
    display: flex;
    width: 100%;
    margin:0 ;
    padding: 0;
    justify-content: space-between;
    gap:10%;
    button{
        flex:1;
        margin:0;
        border-radius:6px 6px 0 0; 
    }
`;

const Chat = ({ room, setRoom, signOutUser }) => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messageRef = collection(db, "messages");

    const user = auth.currentUser

    useEffect(() => {
        const queryMessages = query(messageRef, where('room', '==', room), orderBy('createdAt'));
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            })
            setMessages(messages)
        })

        return () => unsubscribe();
    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (newMessage === "") return;
        await addDoc(messageRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room: room

        });

        setNewMessage('');
    }

    return (

        <ChatStyled>
            <ChatHeader>
                <img src={user?.photoURL} alt="" />
                <div className="column">
                    <p>Hi {user?.displayName}</p>
                    <h3>Welcome to: {room.toUpperCase()}</h3>
                </div>

            </ChatHeader>
            <div className="messages">
                {messages.map((message) => (
                    <div key={message.id} className="message">
                        <span className="user">{message.user}: </span>
                        {message.text}
                    </div>
                ))}
            </div>

            <FormStyled onSubmit={handleSubmit}>
                <input placeholder='Type your message here...'
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type='submit'>Send</button>
            </FormStyled>
            <BtnsContainer >
                <SignOutBtn signOutUser={signOutUser} />
                <ExitRoomBtn setRoom={setRoom}/>
            </BtnsContainer>
        </ChatStyled>
    )
}

export default Chat