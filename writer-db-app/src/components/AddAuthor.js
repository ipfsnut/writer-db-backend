import { useState } from 'react';
import { Modal, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { addAuthor } from './api';
import { getAccounts, getChainId, getChainName } from './utils';

const AddAuthor = ({ show, handleClose, account }) => {
  const [formData, setFormData] = useState({
    walletAddress: account,
    name: '',
    bookTitle: '',
    bookId: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const accounts = await getAccounts();
    if (!accounts || accounts.length === 0) {
      setLoading(false);
      setError('Please connect to MetaMask');
      return;
    }

    const chainId = await getChainId();
    const chainName = await getChainName(chainId);

    if (chainId !== 1 && chainId !== 3 && chainId !== 4 && chainId !== 5 && chainId !== 42 && chainId !== 42161 && chainId !== 421611) {
      setLoading(false);
      setError(`Please switch to Ethereum, Ropsten, Rinkeby, Goerli, Kovan, Arbitrum or Polygon network. Current network: ${chainName}`);
      return;
    }

    try {
      await addAuthor(formData.walletAddress, formData.name, formData.bookTitle, formData.bookId, chainName);
      setLoading(false);
      handleClose();
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError('An error occurred while adding the author. Please try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Author</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="walletAddress">
            <Form.Label>Wallet Address</Form.Label>
            <Form.Control type="text" name="walletAddress" value={formData.walletAddress} onChange={handleInputChange} disabled />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group controlId="bookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" name="bookTitle" value={formData.bookTitle} onChange={handleInputChange} required />
          </Form.Group>
          <Form.Group controlId="bookId">
            <Form.Label>Book ID</Form.Label>
            <Form.Control type="text" name="bookId" value={formData.bookId} onChange={handleInputChange} required />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddAuthor;
