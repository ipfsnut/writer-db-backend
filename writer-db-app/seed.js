// seed.js

const api = require('./src/components/api');

// Rest of the code...

async function seedDatabase() {
  try {
    await api.addAuthor('0x3dad9b9db45de5c7f05590e993f6f0be93bb7c27', 'John Doe', 'My Book', '0x123abc', 'Ethereum');
    await api.addAuthor('0x3dad9b9db45de5c7f05590e993f6f0be93bb7c27', 'Jane Doe', 'Her Book', '0x456def', 'Polygon');
    await api.addAuthor('0x3dad9b9db45de5c7f05590e993f6f0be93bb7c27', 'Bob Smith', 'Their Book', '0x789ghi', 'Binance Smart Chain');
    console.log('Data seeded successfully!');
  } catch (error) {
    console.error(error);
  }
}

seedDatabase();
