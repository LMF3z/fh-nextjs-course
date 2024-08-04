export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface SinglePokemon {
  id: string;
  name: string;
}
