import { GraphQLClient } from "graphql-request";
import { GetPokemonQuery, GetPokemonQueryVariables, getSdk } from "pokemon-sdk";

const URL = "https://graphqlpokemon.favware.tech/v7";
const client = new GraphQLClient(URL);
export type Pokemon = GetPokemonQuery["getFuzzyPokemon"][0];

const { getPokemon } = getSdk(client);

async function fetchPokemon(input: GetPokemonQueryVariables): Promise<Pokemon> {
  const pokemonQuery = await getPokemon(input);
  if (pokemonQuery.getFuzzyPokemon && pokemonQuery.getFuzzyPokemon.length == 0)
    throw new Error("pokemon not found");
  return pokemonQuery.getFuzzyPokemon[0];
}

export { fetchPokemon };
