import { getByText } from '@testing-library/react';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getPokemonData } from '../services/getPokemonData';
import { getPokemonInfo } from '../services/getPokemonInfo';
import { triggerGetPokemonError, triggerGetPokemonInfoError, triggerGetPokemonSuccess, triggerGetPokemonInfoSuccess } from './actions'

export function* fetchPokemonData() {
	try {
		const data = yield call(getPokemonData)
		yield put(triggerGetPokemonSuccess(data))
	} catch(err) {
		yield put(triggerGetPokemonError(err))
		console.log(err)
	}
}

export function* fetchPokemonInfo({pokemonNameArray}) {
	try {
		console.log(pokemonNameArray)
		const responses = yield pokemonNameArray.map(pokemonName => {
			return call(getPokemonInfo, pokemonName.name)
		})
		yield put(triggerGetPokemonInfoSuccess(responses))

	} catch(err) {
		yield put(triggerGetPokemonInfoError(err))
	}
}


export default function* rootSaga() {
	yield takeLatest('TRIGGER_GET_POKEMON', fetchPokemonData);
	yield takeLatest('TRIGGER_GET_POKEMON_INFO', fetchPokemonInfo);
} 