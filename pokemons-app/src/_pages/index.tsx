import { useState } from "react";
import { fetchPokemon, Pokemon } from "@/pokemon-client";
import { PokemonInfo, PokemonInfoFallback } from "@/components/pokemon";

export default function Pokemon({
  initialPokemon,
}: {
  initialPokemon: Pokemon;
}) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(initialPokemon);
  const [isLoading, setLoading] = useState<boolean>(false);
  async function handleClick(name: string) {
    try {
      setLoading(true);
      const pokemon = await fetchPokemon({ pokemon: name });
      setPokemon(pokemon);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  let pokemonUI =
    !pokemon || isLoading ? (
      <div className={"pokemon-info-app"}>
        <PokemonInfoFallback name={"charizard"} />
      </div>
    ) : (
      <PokemonInfo pokemon={pokemon} />
    );
  return (
    <div className={"pokemon-info-app"}>
      <ul className={"list"}>
        <li>
          <button onClick={() => handleClick("charizard")}>Charizard</button>
        </li>
        <li>
          <button onClick={() => handleClick("pikachu")}>Pikachu</button>
        </li>
        <li>
          <button onClick={() => handleClick("bulbasur")}>Bulbasur</button>
        </li>
      </ul>
      {pokemonUI}
    </div>
  );
}

export async function getServerSideProps() {
  const initialPokemon = await fetchPokemon({ pokemon: "charizard" });
  return {
    props: { initialPokemon },
  };
}
