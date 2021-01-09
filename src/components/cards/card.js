import React from 'react'
import './card.scss'

const Card = ( {specificPokemonData} ) => {
  return (
    <div>
		<ul class="cards">
    		<li class="cards_item">
    	  		<div class="card">
    	  		  <div class="card_image">
					<img className="pokemon-img"src={specificPokemonData.sprites.front_default || ''} alt='imagem do pokemon' />
				  </div>
    	  		  <div class="card_content">
					<p className='name-pokemon'>{specificPokemonData.name}</p>
					<p>ID do Pokemón: {specificPokemonData.id}</p>
					<div>
						{specificPokemonData.types.map((type, index) => {
							return (
								<div key={index+1} className='pokemon-types'>
									<span >{type.type.name}</span><span> {' '}</span>
								</div>
							)
						})}
						{specificPokemonData.stats.map((stat, index) => {
							return (
								<div key={index+1}>
									<br></br>
									<span>Nome do stat:{stat.stat.name}</span>
									<span> {' '} </span>
									<br/>
									<span>Valor do stat:{stat.base_stat}</span>
								</div>
							)
							
						})}
					</div>
    	  		  </div>
    	  		</div>
    		</li>
 		</ul>
	</div>
  )
}

export default Card