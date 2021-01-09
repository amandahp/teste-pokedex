import React from 'react'
import './card.scss'

const Card = ( {specificPokemonData} ) => {
  return (
    <div className='container-item'>
			<div className="container_item">
    		<div className="cards_item">
    	  	<div className="card">
    	  		<div className="card_image">
							<img className="pokemon-img" src={specificPokemonData.sprites.front_default || ''} alt='imagem do pokemon' />
				  	</div>
    	  		<div className="card_content">
							<p className='name-pokemon'>{specificPokemonData.name}</p>
							<p>ID do Pokemón: {specificPokemonData.id}</p>
							<div>
								<div  className='pokemon-types'>
									<span> Tipo: </span>
									{specificPokemonData.types.map((type, index) => {
										return (
												<>
													<span key={index+1}>{type.type.name}</span><span> {' '}</span>
												</>
												)
											})}
								</div>
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
    		</div>
 		</div>
	</div>
  )
}

export default Card