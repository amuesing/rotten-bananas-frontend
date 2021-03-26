import React from 'react'

function Search({searchTerm, onSearchChange}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Media</label>
            <input
                type="text"
                id="search"
                placeholder="Search Media"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    )
}

export default Search
