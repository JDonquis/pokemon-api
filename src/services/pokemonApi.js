import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPokemons = async (offset = 0, limit = 20) => {
  try {
    const response = await api.get(`pokemon?offset=${offset}&limit=${limit}`)
    return response.data
  } catch (error) {
    console.error('Error fetching Pokémon list:', error)
    throw error
  }
}

export const getPokemonDetails = async (id) => {
  try {
    const response = await api.get(`pokemon/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching Pokémon details:', error)
    throw error
  }
}