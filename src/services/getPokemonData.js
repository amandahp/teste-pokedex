import axios from "axios"

export const getPokemonData = async () => {
	const requestUrl = 'https://pokeapi.co/api/v2/pokemon?limit=300';
	const response = await axios.get(requestUrl)
	return 	response.data.results
}
