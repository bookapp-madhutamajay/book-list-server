const express = require('express');
const cors = require('cors');
const pg = require('pg');
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();
const client = new pg.Client(DATABASE_URL);
const CLIENT_URL = process.env.CLIENT_URL;

client.connect();
client.on('error', err=>console.error(err));

app.use(cors());

app.get('/books',(req,res) => {
  client.query (`
  SELECT * FROM books;
  `).then(result => res.send(result.rows))
  .catch(console.error);
});
    


app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));