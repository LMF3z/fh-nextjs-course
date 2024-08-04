import { Metadata } from 'next';
import { PokemonDetails } from '@/lib/interfaces';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `Pagina del pokemon ${name}`,
  };
}

const getPokemon = async (id: string): Promise<PokemonDetails> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
  }).then((res) => res.json());

  return pokemon;
};

const PokemonPage = async ({ params }: Props) => {
  const pokemon = await getPokemon(params.id);
  return <main>PokemonPage {pokemon.name}</main>;
};

export default PokemonPage;
