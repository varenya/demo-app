import { PokemonInfo } from "@/components/pokemon";
import { fetchPokemon } from "@/pokemon-client";

export default async function InitialPokemon() {
  const pokemon = await fetchPokemon({ pokemon: "charizard" });
  return <PokemonInfo pokemon={pokemon} />;
}
