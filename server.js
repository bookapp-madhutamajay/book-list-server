'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();
const client = new pg.Client(DATABASE_URL);
const CLIENT_URL = process.env.CLIENT_URL;


client.connect();
client.on('error', err => console.error(err));

app.use(cors());

app.get('/books',(req,res) => {
  client.query (`
  SELECT * FROM books;
  `).then(result => res.send(result.rows))
  .catch(console.error);
  
});
app.get('/api/v1/books',(req,res) => {
  client.query (`
  SELECT book_id, description, title, isbn, author, image_url FROM books;
  `).then(result => res.send(result.rows))
  .catch(console.error);
});

//app.get('*', (req, res) => res.redirect(CLIENT_URL));

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));