import React, { useState } from 'react';
import Modal from 'react-modal';

function AuthorModal({ isOpen, onRequestClose, onSubmit }) {
  const [authorName, setAuthorName] = useState('');
  const [bookTitle, setBookTitle] = useState('');

  const handleSubmit = () => {
    onSubmit({ authorName, bookTitle });
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Create Author Profile</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="authorName">Author Name:</label>
        <input
          type="text"
          id="authorName"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <label htmlFor="bookTitle">Book Title (optional):</label>
        <input
          type="text"
          id="bookTitle"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onRequestClose}>Cancel</button>
      </form>
    </Modal>
  );
}

export default AuthorModal;
