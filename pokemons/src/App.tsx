import './App.css'
import {Suspense, useState} from 'react'
import {GetPokemonQuery, GetPokemonQueryVariables, getSdk} from 'pokemon-sdk'
import {GraphQLClient} from 'graphql-request'
import {PokemonInfo, PokemonInfoFallback} from './pokemon.tsx'
import {ErrorBoundary} from 'react-error-boundary'
import {suspend} from 'suspend-react'

const URL = 'https://graphqlpokemon.favware.tech/v7'
const client = new GraphQLClient(URL)

const {getPokemon} = getSdk(client)

export type Pokemon = GetPokemonQuery['getFuzzyPokemon'][0]

async function fetchPokemon(input: GetPokemonQueryVariables): Promise<Pokemon> {
  const pokemonQuery = await getPokemon(input)
  if (pokemonQuery.getFuzzyPokemon && pokemonQuery.getFuzzyPokemon.length == 0)
    throw new Error('[pokemonName] not found')
  return pokemonQuery.getFuzzyPokemon[0]
}

function LoadPokemon({name}: {name: string}) {
  const pokemonData = suspend(() => fetchPokemon({pokemon: name}), [name])
  return <PokemonInfo pokemon={pokemonData} />
}

function App() {
  const [name, setName] = useState<string>('charizard')

  function handleClick(name: string) {
    setName(name)
  }

  return (
    <div className={'pokemon-info-app'}>
      <ul className={'list'}>
        <li>
          <button onClick={() => handleClick('charizard')}>Charizard</button>
        </li>
        <li>
          <button onClick={() => handleClick('pikachu')}>Pikachu</button>
        </li>
        <li>
          <button onClick={() => handleClick('bulbasur')}>Bulbasur</button>
        </li>
      </ul>
      <ErrorBoundary
        fallback={<h1 style={{color: 'red'}}>Error loading the pokemons</h1>}
      >
        <Suspense
          fallback={
            <div className={'pokemon-info-app'}>
              <PokemonInfoFallback name={'charizard'} />
            </div>
          }
        >
          <LoadPokemon name={name} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
