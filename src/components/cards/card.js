import React from 'react'
import './card.scss'

const Card = ( {specificPokemonData} ) => {
  return (
    <div>
			<p>{specificPokemonData.id}</p>
			<img src={specificPokemonData.sprites.front_default || ''} alt='imagem do pokemon' />
			<p>{specificPokemonData.name}</p>
			{specificPokemonData.types.map((type, index) => {
				return (
					<div key={index+1} className='pokemon-types'>
						<span >{type.type.name}</span>
						<span> {' '}</span>
					</div>
				)
			})}
			{specificPokemonData.stats.map((stat, index) => {
				return (
					<div key={index+1}>
						<br></br>
						<span>Nome do stat : {stat.stat.name}</span>
						<span> {' '} </span>
						<span>Valor do stat: {stat.base_stat}</span>
					</div>
				)

			})}
		</div>
  )
}

export default Card