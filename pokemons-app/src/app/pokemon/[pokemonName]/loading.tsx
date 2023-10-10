import { Pokemon } from "@/pokemon-client";
import { PokemonEnum } from "pokemon-sdk";
import { PokemonDataView } from "@/components/pokemon";
import { notFound } from "next/navigation";

const homepage = "https://react-suspense.netlify.app/";
const fallbackImgUrl = `${homepage}img/pokemon/fallback-pokemon.jpg`;

const pokemonMap = new Map<string, PokemonEnum>([
  ["charizard", PokemonEnum.Charizard],
  ["bulbasaur", PokemonEnum.Bulbasaur],
  ["pikachu", PokemonEnum.Pikachu],
]);

export default function PokemonInfoFallback() {
  const fallbackPokemonData: Pokemon = {
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
        <img src={fallbackImgUrl} alt={"pokemon loading"} />
      </div>
      <>
        <section>
          <h2>
            {"loading.."}
            <sup>{fallbackPokemonData.num}</sup>
          </h2>
        </section>
        <section>
          <ul>
            <li>{fallbackPokemonData.abilities.first.name}</li>
            {fallbackPokemonData.abilities &&
            fallbackPokemonData.abilities.special ? (
              <li>{fallbackPokemonData.abilities.special.name}</li>
            ) : null}
          </ul>
        </section>
      </>
    </div>
  );
}
