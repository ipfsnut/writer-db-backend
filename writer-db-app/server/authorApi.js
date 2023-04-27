import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


const DATABASE_FILE = 'writerdb.sqlite';

const initializeDatabase = async () => {
  const db = await open({
    filename: DATABASE_FILE,
    driver: sqlite3.Database,
  });

  await db.run(`CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    country TEXT,
    city TEXT
  )`);

  return db;
};

const getAuthors = async () => {
  const db = await initializeDatabase();
  const authors = await db.all('SELECT * FROM authors');
  await db.close();
  return authors;
};

const getAuthorById = async (id) => {
  const db = await initializeDatabase();
  const author = await db.get('SELECT * FROM authors WHERE id = ?', id);
  await db.close();
  return author;
};

const createAuthor = async (author) => {
  const db = await initializeDatabase();
  const { firstName, lastName, email, country, city } = author;
  const result = await db.run(
    `INSERT INTO authors (firstName, lastName, email, country, city) VALUES (?, ?, ?, ?, ?)`,
    firstName,
    lastName,
    email,
    country,
    city
  );
  await db.close();
  return result.lastID;
};

const updateAuthor = async (id, author) => {
  const db = await initializeDatabase();
  const { firstName, lastName, email, country, city } = author;
  const result = await db.run(
    `UPDATE authors SET firstName = ?, lastName = ?, email = ?, country = ?, city = ? WHERE id = ?`,
    firstName,
    lastName,
    email,
    country,
    city,
    id
  );
  await db.close();
  return result.changes;
};

const deleteAuthor = async (id) => {
  const db = await initializeDatabase();
  const result = await db.run('DELETE FROM authors WHERE id = ?', id);
  await db.close();
  return result.changes;
};

const getCurrentAuthor = async (account) => {
  const db = await initializeDatabase();
  const author = await db.get('SELECT * FROM authors WHERE email = ?', account);
  await db.close();
  return author;
};

export { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor, getCurrentAuthor };
