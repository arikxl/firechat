import React, { useState, useRef } from 'react';
import styled from 'styled-components';


const RoomStyled = styled.section`
  display: flex;
  flex-direction: column;

  label{
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
  }

  input {
    width: 200px;
    height: 30px;
    border: 2px solid #F5820B;
    border-radius: 6px;
    padding-left: 5px;
    font-size: 20px;
    text-align: center;
    margin: 5px;
  }

  button {
    width: 210px;
    height: 40px;
    border: none;
    border-radius: 6px;
    padding-left: 5px;
    font-size: 20px;
    text-align: center;
    margin: 5px;
    background-color: #F5820B;
    color: white;
    cursor: pointer;
  }

`;

const Room = ({ setRoom }) => {

    const roomInputRef = useRef(null);


  return (
      <RoomStyled>
          <label >Enter Room Name:</label>
          <input ref={ roomInputRef } />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
              Enter Chat
          </button>
      </RoomStyled>
  )
}

export default Room