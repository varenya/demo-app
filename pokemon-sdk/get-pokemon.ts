import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";

const client = new GraphQLClient("https://graphqlpokemon.favware.tech/v7");

const { getPokemon } = getSdk(client);

async function getData() {
  const pokeData = await getPokemon({ pokemon: "charizard" });
  console.log({ pokeData });
}

getData();
