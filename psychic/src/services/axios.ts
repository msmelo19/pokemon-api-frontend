import axios, { AxiosInstance } from 'axios';

export const requestType = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/type/psychic',
});

export const requestPokemon = (url: string): AxiosInstance => {
  return axios.create({
    baseURL: url,
  });
};
