import sqlite3

# Connect to the database file
conn = sqlite3.connect('writer-db.db')

# Create a table for storing user information
conn.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    wallet_address TEXT NOT NULL,
    author_name TEXT NOT NULL,
    book_title TEXT NOT NULL,
    contract_address TEXT NOT NULL,
    blockchain TEXT NOT NULL
);
''')

# Save changes to the database
conn.commit()

# Close the database connection
conn.close()
