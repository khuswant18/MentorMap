import React from 'react'
import './SearchBar.css'
import { Search } from 'lucide-react'

function SearchBar({placeholder = "Search...." , onSearch}) {
  return (
        <div className="input-search">
          <div className="input-wrapper"> 
            <Search className='search-icon'/>
          <input className='college-search' 
          type="text" placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)} 
          /> 

        </div>
          <button className='search-button'>Search</button>
        </div>
       
  )
}


export default SearchBar
 