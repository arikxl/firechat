import React from 'react';
import styled from 'styled-components';

const ExitBtnStyle = styled.button`
    margin: 50px auto 0;
    display: flex;
    background-color:rgb(255, 202, 40);
    color: white;
    border: none;
    justify-content: center;
    align-items: center;

    width: 180px;
    height: 40px;
    border-radius: 6px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;

    :hover{
        background-color:rgb(255, 160, 0) ;
    }
`;

const ExitRoomBtn = ({ setRoom }) => {
    return (
        <ExitBtnStyle onClick={(e) => setRoom(null)}>
            Exit Room
        </ExitBtnStyle>
    )
}

export default ExitRoomBtn