import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) =>(
    <input 
        className="search"
        type='search' 
          placeholder={placeholder}
          onChange={ handleChange  } />
);

// components n tem life cycle  e state.
//serve para filtrar e retornar um html