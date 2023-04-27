from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def create_table():
    conn = sqlite3.connect('authors.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS authors
                 (wallet_address TEXT PRIMARY KEY, author_name TEXT, book_title TEXT, contract_address TEXT, blockchain TEXT)''')
    conn.commit()
    conn.close()

@app.route('/add_author', methods=['POST'])
def add_author():
    data = request.get_json()

    wallet_address = data['wallet_address']
    author_name = data['author_name']
    book_title = data['book_title']
    contract_address = data['contract_address']
    blockchain = data['blockchain']

    conn = sqlite3.connect('authors.db')
    c = conn.cursor()
    c.execute('INSERT OR IGNORE INTO authors VALUES (?,?,?,?,?)', (wallet_address, author_name, book_title, contract_address, blockchain))
    conn.commit()
    conn.close()

    return jsonify({"status": "success"})

@app.route('/get_author/<wallet_address>', methods=['GET'])
def get_author(wallet_address):
    conn = sqlite3.connect('authors.db')
    c = conn.cursor()
    c.execute('SELECT * FROM authors WHERE wallet_address=?', (wallet_address,))
    author = c.fetchone()
    conn.close()

    if author:
        return jsonify({
            "wallet_address": author[0],
            "author_name": author[1],
            "book_title": author[2],
            "contract_address": author[3],
            "blockchain": author[4]
        })
    else:
        return jsonify({"status": "not_found"})

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
