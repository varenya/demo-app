import { PokemonEnum } from "pokemon-sdk";
import { Pokemon } from "@/pokemon-client";

function PokemonDataView({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <section>
        <h2>
          {pokemon.key}
          <sup>{pokemon.num}</sup>
        </h2>
      </section>
      <section>
        <ul>
          <li>{pokemon.abilities.first.name}</li>
          {pokemon.abilities && pokemon.abilities.special ? (
            <li>{pokemon.abilities.special.name}</li>
          ) : null}
        </ul>
      </section>
    </>
  );
}
function PokemonInfo({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className={"pokemon-info"}>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.sprite} alt={"pokemon"} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

export { PokemonInfo, PokemonDataView };
