'use client';

import NextLink from 'next/link';
import { IoHeartOutline } from 'react-icons/io5';
import { SinglePokemon } from '@/lib/interfaces';
import { CustomShowImage } from '../CustomShowImage';

export const CardPokemonList = ({ poke }: { poke: SinglePokemon }) => {
  return (
    <div className='mx-auto right-0 mt-2 w-60'>
      <div className='bg-white rounded overflow-hidden shadow-lg'>
        <div className=' flex flex-col justify-center items-center text-center p-6 bg-gray-800 border border-white'>
          <CustomShowImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
            alt={poke.name}
          />
          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
            {poke.name}
          </p>
          <div className='mt-5'>
            <NextLink
              href={`/dashboard/pokemons/${poke.name}`}
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'
            >
              Más info.
            </NextLink>
          </div>
        </div>
        <div className='border-b'>
          <NextLink
            href='/account/campaigns'
            className='p-4 hover:bg-gray-100 flex items-center'
          >
            <div className='text-red-600'>
              <IoHeartOutline />
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-800 leading-none'>
                No es favorito
              </p>
            </div>
          </NextLink>
        </div>
      </div>
    </div>
  );
};
