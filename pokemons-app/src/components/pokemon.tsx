import { PokemonEnum } from "pokemon-sdk";
import { Pokemon } from "@/pokemon-client";

const homepage = "https://react-suspense.netlify.app/";
const fallbackImgUrl = `${homepage}img/pokemon/fallback-pokemon.jpg`;
function PokemonInfoFallback({ name }: { name: string }) {
  const pokemon: Pokemon = {
    key: PokemonEnum.Charizard,
    num: 0,
    abilities: {
      first: { name: "Loading Attack 1" },
      special: { name: "Loading Attack 2" },
    },
    sprite: fallbackImgUrl,
    species: "",
    color: "loading",
  };
  return (
    <div className={"pokemon-info"}>
      <div className="pokemon-info__img-wrapper">
        <img src={fallbackImgUrl} alt={name} />
      </div>
      <section>
        <h2>
          {"loading.."}
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
    </div>
  );
}

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

export { PokemonInfo, PokemonInfoFallback };
