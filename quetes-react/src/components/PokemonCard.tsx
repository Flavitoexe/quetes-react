interface PokemonProps {
  pokemon: {
    name: string,
    imgSrc?: string
  }
}

function PokemonCard({pokemon}: PokemonProps) {
    return (
      <figure>
          <figcaption>{pokemon.name}</figcaption>
          {pokemon.imgSrc != null ? (
              <img src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
              <p>???</p>
          )}
      </figure>
    )
}

export default PokemonCard