import React, {useState, useEffect}from 'react';
import axios from "axios"
import './App.css';
import CharacterCard from "./components/Character"
import styled from "styled-components"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  //const [ characters ,setCharacters] = useState ([]);
  const [page, setPage] = useState (1);
  const [results, setResults] = useState ([]);

  const CardBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 1px solid grey;
`;

const Header = styled.h1`
  font-family: "Codystar", impact;
  color: black;
  font-size: 80px;
  text-shadow: 5px 7px 5px white;
`;

const Subheading = styled.h3`
  font-family: "Press Start 2P", cursive;
  font-size: 20px;
  color: black;
`;




  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() => {
    axios.get (`https://swapi.dev/api/people/`)
      .then(response => {
        console.log(response);
        setResults(response.data.results);
        
      })
      .catch (err => {
        console.log(err)
      });
  }, [])


  return (
    <div className="App">
    <Header>Star Wars</Header>
    <Subheading>Character Stats and Attributes!</Subheading>
    <CardBox>
        {results.map (char => <CharacterCard name={char.name} height = {char.height} mass = {char.mass} hair={char.hair_color} skin={char.skin_color} eye={char.eye_color} birth={char.birth_year} gender={char.gender} />)}
    </CardBox>

  </div>
   
  
);
}

export default App;
