import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import './search-bar.scss'


const SearchBar = ({ handleClick, handleChange, inputValue }) => {
    const iconSearch = <FontAwesomeIcon icon={faSearch} className='icon-user' />

    return (
        <div className="wrap">
            <div className="search">
                <input value={inputValue} onChange={(event) => handleChange(event.target.value)} type="text" className="searchTerm" placeholder="Localize seu pokémon aqui" />
                <button onClick={() => handleClick()} type="submit" className="searchButton">
                    <i>{iconSearch}</i>
                </button>
            </div>
        </div>
    )
}

export default SearchBar