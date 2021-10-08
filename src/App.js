import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { useState } from 'react';
import Container from './Container';
import Logo from './Logo';
import { PokemonDetail } from './components/pokemonDetail/PokemonDetail';
import { PokemonSelector } from './components/pokemonSelector/PokemonSelector.jsx';
import { PokemonSquad } from './components/pokemonSquad/PokemonSquad';

const client = new GraphQLClient({
  url: process.env.REACT_APP_POKE_ENDPOINT,
});

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [savedPokemon, setSavedPokemon] = useState([]);

  const handleSavePokemon = (pokemon) => {
    if (savedPokemon.length < 6) {
      if (savedPokemon.map(pokemon => pokemon.name).includes(pokemon.name)) {
        alert('You have already saved this pokemon.');
      } else setSavedPokemon([...savedPokemon, pokemon]);
    } else alert('You already have 6 pokemon in your squad!')
    
  }

  const handleRemoveFromSquad = (name) => {
    setSavedPokemon(savedPokemon.filter(pokemon => pokemon.name !== name))
  }

  return (
    <ClientContext.Provider value={client}>
        <Container>
          <Logo></Logo>
          <div style={{display:'flex'}}>
            <PokemonSelector onPokemonSelect={(pokemon) => setSelectedPokemon(pokemon)}></PokemonSelector>
            <PokemonDetail 
              onSavePokemon={handleSavePokemon}
              pokemon={selectedPokemon}></PokemonDetail>
          </div>
          <div>
            <PokemonSquad savedPokemon={savedPokemon} onRemoveFromSquad={handleRemoveFromSquad}>
            </PokemonSquad>
          </div>
        </Container>
    </ClientContext.Provider>
  );
}
