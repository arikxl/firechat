import React, { useRef } from 'react';
import styled from 'styled-components';

const RoomStyled = styled.section`
  max-width: 400px;
  margin: 100px auto 0;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  label{
    text-align: center;
    font-size: 25px;
    margin: 0 auto 20px; 
  }

  input {
    width: 200px;
    height: 30px;
    border: 2px solid #F5820B;
    border-radius: 6px;
    padding-left: 5px;
    font-size: 20px;
    text-align: center;
    margin: 5px auto;
  }

  button {
    width: 210px;
    height: 40px;
    border: none;
    border-radius: 6px;
    padding-left: 5px;
    font-size: 20px;
    text-align: center;
    margin: 5px auto;
    background-color: #F5820B;
    color: white;
    cursor: pointer;
    :hover{
      background-color:rgb(255, 160, 0) ;
    }
  }

`;

const Room = ({ setRoom }) => {

    const roomInputRef = useRef(null);

  return (
    <RoomStyled>
      <form onSubmit={() => setRoom(roomInputRef.current.value)}>
          <label >Enter Room Name:</label>
          <input ref={ roomInputRef } />
          <button type='submit'>
              Enter Chat
          </button>
      </form>
      </RoomStyled>
  )
}

export default Room