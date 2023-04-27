import React, { useState } from 'react';
import Modal from 'react-modal';
import ConnectButton from './ConnectButton';
import AddAuthor from './AddAuthor';

Modal.setAppElement('#root');

function AuthorForm({ handleFormSubmit }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsFormSubmitted(true);
    handleFormSubmit();
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel='Author Form'
      className='Modal'
      overlayClassName='Overlay'
    >
      {isFormSubmitted ? (
        <>
          <h2>Thank you!</h2>
          <p>Your form has been submitted.</p>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </>
      ) : (
        <>
          <h2>Add author</h2>
          <AddAuthor handleSubmit={handleSubmit} />
          <p>Connect your MetaMask account to submit the form:</p>
          <ConnectButton />
        </>
      )}
    </Modal>
  );
}

export default AuthorForm;
