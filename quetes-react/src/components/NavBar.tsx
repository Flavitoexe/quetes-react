interface PokemonProps {
    name: string,
    imgSrc?: string
}

interface NavBarProps {
    pokemonList: PokemonProps[],
    setPokemonName: (name: string) => void
}

function NavBar({pokemonList, setPokemonName}: NavBarProps) {
    return (
        <nav>
            {pokemonList.map ((pokemon) => (
            <button key={pokemon.name} type='button' onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
            ))}
        </nav>
    )
}

export default NavBar