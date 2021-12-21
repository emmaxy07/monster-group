import React from 'react'
import './search-box.styles.css'

const SearchBox = ({ placeholder, handleChange }) => {
    return(
        <div>
        <input 
        class='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange} />
        </div>
    )
}

export default SearchBox