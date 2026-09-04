import '../PokemonCard.css'

interface PokemonProps {
  pokemon: {
    name: string,
    imgSrc?: string,
    color?: string
  }
}

function PokemonCard({pokemon}: PokemonProps) {
    return (
      <figure className="card" style={{backgroundColor: pokemon.color}}>
          <figcaption>{pokemon.name}</figcaption>
          {pokemon.imgSrc != null ? (
              <img src={pokemon.imgSrc} alt={pokemon.name} className='card-image' />
          ) : (
              <p>???</p>
          )}
      </figure>
    )
}

export default PokemonCard