import { PokemonsResponse, SinglePokemon } from '@/lib/interfaces';
import { CardPokemonList } from '@/lib/components';

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SinglePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const { results, ..._ } = data;

  return results.map((poke) => ({
    id: poke.url.split('/').at(-2)!,
    name: poke.name,
  }));
};

const PokemonsPage = async () => {
  const data = await getPokemons();

  return (
    <main className='flex flex-col'>
      <span className='text-5xl my-2'>
        Listado de Pokemons
        <small> estatico</small>
      </span>

      <div className='flex flex-wrap gap-10 items-center justify-center'>
        {data?.map((poke) => (
          <CardPokemonList key={poke.id} poke={poke} />
        ))}
      </div>
    </main>
  );
};

export default PokemonsPage;
