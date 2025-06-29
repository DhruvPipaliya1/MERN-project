const connectToDb = require('./db');
const express = require('express');

connectToDb();

const app = express();
const port = 5000;

// ✅ Test route
app.get('/', (req, res) => {
  res.send("Hello from the backend!");
});

app.use('/api/auth', require('./routes/auth'))
// app.use('api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
