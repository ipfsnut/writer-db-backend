import React, { useState, useEffect } from 'react';
import './App.css';
import MetamaskLogin from './components/MetamaskLogin';
import AuthorForm from './components/AuthorForm';
import UserList from './components/UserList';
import AddAuthor from './components/AddAuthor';
import Homepage from './components/Homepage';
import AuthorModal from './components/AuthorModal';

function App() {
  const [metamask, setMetamask] = useState(false);
  const [account, setAccount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: ''
  });

  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          if (accounts.length) {
            setMetamask(true);
            setAccount(accounts[0]);

            // Open the AuthorModal when the user connects to MetaMask for the first time
            setIsAuthorModalOpen(true);
          }
        })
        .catch(console.log);
    }
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (formSubmitted) {
      setFormSubmitted(true);
    }
  }, []);

  const handleFormSubmit = (data) => {
    setFormData(data);
    localStorage.setItem('formSubmitted', true);
    setFormSubmitted(true);
  }

  const handleAuthorModalSubmit = (data) => {
    // Here, you can create a new object in the database using the data from the modal
    // and the Ethereum address (account) from Metamask
    console.log('Author data:', data);
    console.log('Ethereum address:', account);

    // You can also call your API functions to create/update the author and book records
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>WriterDB</h1>
      </header>
      {formSubmitted && !metamask && <MetamaskLogin />}
      {!formSubmitted && <AuthorForm handleFormSubmit={handleFormSubmit} />}
      {metamask && formSubmitted && (
        <>
          <Homepage account={account} />
          <AddAuthor formData={formData} setFormData={setFormData} />
          <UserList />
        </>
      )}

<AuthorModal isOpen={metamask} onRequestClose={() => setIsAuthorModalOpen(false)} onSubmit={handleAuthorModalSubmit} />

    </div>
  );
}

export default App;
