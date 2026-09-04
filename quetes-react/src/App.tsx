import { useState } from 'react';
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "green",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      color: "orange",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      color: "blue",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "yellow",
  },
  {
    name: "mew",
  },
]

function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur")

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName)
  if (pokemon == null) {
    throw new Error("Invalid pokemon name")
  }

  return (
    <div className='container'>
      <nav>
        {pokemonList.map ((pokemon) => (
          <button onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
        ))}
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  )
}

export default App
