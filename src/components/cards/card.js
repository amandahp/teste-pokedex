import React from 'react'
import './card.scss'

const Card = ( {specificPokemonData} ) => {
  return (
    <div className='container-item'>
			<div className="container_item">
    		<div className="cards_item">
    	  	<div className="card">
			  	<p className='title'>Nº {specificPokemonData.id}</p>
    	  		<div className="card_image">
						<img className="pokemon-img" src={specificPokemonData.sprites.front_default || ''} alt='imagem do pokemon' />
				  	</div>
    	  		<div className="card_content">
							<p className='name-pokemon title'>{specificPokemonData.name}</p>
							<div>
								<div  className='pokemon-types'>
									<p className='title'> TIPO </p>
									<p className='pokemon-types'>
										{specificPokemonData.types.map((type, index) => {
										return (
												<>
													<span key={index+1}>{type.type.name}</span><span> {' '}</span>
												</>
												)
											})}
									</p>
								</div>
								<p className='title'>BASE STATS</p>
								<div className="stats-base-p">
									{specificPokemonData.stats.map((stat, index) => {
									return (
										<div key={index+1}>
											<br></br>
											<span>{stat.stat.name}: {stat.base_stat}</span>
											<span> {' '} </span>
											<br/>
										</div>
									)	
								})}
								</div>
							</div>
    	  		</div>
    	  	</div>
    		</div>
 		</div>
	</div>
  )
}

export default Card