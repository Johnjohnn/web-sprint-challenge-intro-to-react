// Write your Character component here
import React from 'react';
import styled from 'styled-components';
export default function CharacterCard (props) {


    const CharCard = styled.div`
        border-radius: 2px;
        
        border: 5px solid white;
        box-shadow: 5px 7px 3px black;
        margin: 10px;
        padding: 0px 10px;
        background-color: black;
        color: white;
        width: 25%;
    `;

    const CharName = styled.h2`
        font-size: 16px
        text-shadow: 1px 1px 1px #grey;
    `;


    const Qualities = styled.div`
        font-size: 20px;
        line-height: 5px;
        text-align: left;

    `;

    return (
        <CharCard>
            <CharName>{props.name}</CharName>
            <Qualities>
                <p id="height">Height: {props.height}</p>
                <p id="mass">Mass: {props.mass}</p>
                <p id="hair">Hair Color: {props.hair}</p>
                <p id="skin">Skin Color: {props.skin}</p>
                <p id="eye">Eye Color: {props.eye}</p>    
                <p id="birth">Birth Year: {props.birth}</p>
                <p id="gender">Gender: {props.gender}</p>
            </Qualities>
        </CharCard>
    )
    }
    