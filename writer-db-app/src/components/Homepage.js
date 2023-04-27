import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Search from './Search';

function Homepage({ account }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/api/authors/current?account=${account}`);
      const authorData = await response.json();
      setAuthor(authorData);
    };
    fetchData();
  }, [account]);

  return (
    <div className='Homepage'>
      {author && <Profile author={author} />}
      <Search />
    </div>
  );
}

export default Homepage;
