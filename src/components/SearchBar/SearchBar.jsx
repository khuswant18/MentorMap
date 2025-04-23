import React from 'react'
import './SearchBar.css'
import { Search } from 'lucide-react'

function SearchBar({placeholder = "Search...."}) {
  return (
        <div className="input-search">
          <div className="input-wrapper"> 
            <Search className='search-icon'/>
          <input className='college-search' type="text" placeholder={placeholder}/>

        </div>
          <button className='search-button'>Search</button>
        </div>
      
  )
}


export default SearchBar
 