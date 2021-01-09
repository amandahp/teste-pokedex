export function triggerGetPokemonData() {
  return {
		type: 'TRIGGER_GET_POKEMON'
	}
}

export function triggerGetPokemonSuccess(pokemonData) {
	return {
		type: 'TRIGGER_GET_POKEMON_SUCCESS',
		pokemonData,
	}
}

export function triggerGetPokemonError(error) {
	return {
		type: 'TRIGGER_GET_POKEMON_ERROR',
		error,
	}
}

export function triggerGetPokemonInfo(pokemonNameArray) {
	return {
		type: 'TRIGGER_GET_POKEMON_INFO',
		pokemonNameArray,
	}
}

export function triggerGetPokemonInfoSuccess(specificPokemonData) {
	return {
		type: 'TRIGGER_GET_POKEMON_INFO_SUCCESS',
		specificPokemonData,
	}
}

export function triggerGetPokemonInfoError(error) {
	return {
		type: 'TRIGGER_GET_POKEMON_INFO_ERROR',
		error
	}
}