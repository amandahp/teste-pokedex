import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import './search-bar.scss'


const SearchBar = () => {
    const iconSearch = <FontAwesomeIcon icon={faSearch} className='icon-user' />
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="Localize seu pokémon aqui" />
                <button type="submit" className="searchButton">
                    <i>{iconSearch}</i>
                </button>
            </div>
        </div>
    )
}

export default SearchBar