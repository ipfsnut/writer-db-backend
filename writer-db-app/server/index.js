const express = require('express');
const app = express();
const port = 3001;
const { getCurrentAuthor } = require('./authorApi');

app.use(express.json());

// Define your route here
app.get('/api/authors/current', async (req, res) => {
  const account = req.query.account;
  const author = await getCurrentAuthor(account);
  res.json(author);
});

// ...other routes

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
