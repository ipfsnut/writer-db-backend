// UserList.js

import React, { useState, useEffect } from 'react';
import { getAuthors } from './api';

function UserList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const result = await getAuthors();
        setAuthors(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div>
      <h2>Authors:</h2>
      <ul>
        {authors.map((author) => (
          <li key={author._id}>
            {author.authorName} - {author.bookTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
