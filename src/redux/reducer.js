export const initialState = {
  pokemon: [],
  specificPokemonData: {},
  loading: false,
  error: false,
}

export default function Reducer(state=initialState, action) {
  switch(action.type) {
    case 'TRIGGER_GET_POKEMON':
      return {...state, loading: true}
    case 'TRIGGER_GET_POKEMON_SUCCESS':
      return {...state, loading:false, pokemon:action.pokemonData}
    case 'TRIGGER_GET_POKEMON_ERROR':
      return {...state, loading:false, error: action.error}
    case 'TRIGGER_GET_POKEMON_INFO':
      return {...state, loading: true}
    case 'TRIGGER_GET_POKEMON_INFO_SUCCESS':
      return{...state, loading: false, specificPokemonData: action.specificPokemonData}
    case 'TRIGGER_GET_POKEMON_INFO_ERROR':
      return {...state, loading: false, error: action.error}
    default:
      return state
  }
}
