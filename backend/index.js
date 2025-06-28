const connectToMongo = require('./db');
const express = require('express');

connectToMongo(); // no need to await unless you're handling timing

const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
