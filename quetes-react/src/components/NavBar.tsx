interface PokemonProps {
    name: string,
    imgSrc?: string
}

interface NavBarProps {
    pokemonList: PokemonProps[],
    setPokemonName: (name: string) => void,
    pokemonName: string
}

function NavBar({pokemonList, setPokemonName, pokemonName}: NavBarProps) {
    if (pokemonName === "pikachu") alert("pika pikachu !!!")
        
    return (
        <nav>
            {pokemonList.map ((pokemon) => (
            <button key={pokemon.name} type='button' onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
            ))}
        </nav>
    )
}

export default NavBar