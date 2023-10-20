import { PokemonInfo } from "@/components/pokemon";
import { fetchPokemon } from "@/pokemon-client";

export default async function Pokemon({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemon = await fetchPokemon({ pokemon: pokemonName });
  return <PokemonInfo pokemon={pokemon} />;
}
