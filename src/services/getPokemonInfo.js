import axios from 'axios'

export const getPokemonInfo = async (pokemonName) => {
	const requestUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
	const response = await axios.get(requestUrl)
	const { data } = response
	const {name, types, stats, sprites, id} = data
	return { name, types, stats, sprites, id }
 
}