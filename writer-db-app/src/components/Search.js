import React, { useState } from 'react';
import './Search.css';
import { searchAuthors } from './api';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const results = await searchAuthors(searchQuery);
    setSearchResults(results);
  };

  const handleAuthorClick = (author) => {
    // Take the user to the author's page
  };

  return (
    <div className='Search'>
      <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((author) => (
        <div key={author.id} onClick={() => handleAuthorClick(author)}>
          {author.firstName} {author.lastName}
        </div>
      ))}
    </div>
  );
}

export default Search;
