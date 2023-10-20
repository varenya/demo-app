import { Pokemon } from "@/pokemon-client";
import { PokemonEnum } from "../../../../../pokemon-sdk/sdk";

const homepage = "https://react-suspense.netlify.app/";
const fallbackImgUrl = `${homepage}img/pokemon/fallback-pokemon.jpg`;
export default function PokemonInfoFallback() {
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
        <img src={fallbackImgUrl} alt={"pokemon-loading"} />
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
