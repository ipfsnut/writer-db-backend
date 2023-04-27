const axios = require('axios');

const API_BASE_URL = 'http://localhost:5000';

const addAuthor = async (authorData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/add_author`, authorData);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAuthor = async (walletAddress) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get_author/${walletAddress}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = { addAuthor, getAuthor };
