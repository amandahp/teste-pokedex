import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { triggerGetPokemonData, triggerGetPokemonInfo } from '../../redux/actions';
import Card from '../../components/cards/card'
import './home.scss';

const Home = () => {
	const dispatch = useDispatch()

	const pokemonData = useSelector(state => state.pokemon)
	const specificPokemonData = useSelector(state => state.specificPokemonData)
	const loading = useSelector(state => state.loading)
	const error = useSelector(state => state.error)

	const [displayedPokemon, setDisplayedPokemon] = useState([])

	useEffect(() => {
		dispatch(triggerGetPokemonData())
	}, [])

	useEffect(() => {
		dispatch(triggerGetPokemonInfo(pokemonData))
	}, [pokemonData])

	useEffect(() => {
		setDisplayedPokemon(specificPokemonData)
		console.log('array de objeto', specificPokemonData)
	}, [specificPokemonData])


	return (
		<>
			{displayedPokemon.length && !loading ? (
				<div>
					{displayedPokemon.map((pokemon, index) => {
						return (
							<div> 
								<Card key={index+1} specificPokemonData={pokemon} />
							</div>
						)
					})}
				</div>
			): (
				<div><p>'loading'</p></div>
			)}
		</>
	)
}

export default Home
