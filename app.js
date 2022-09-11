const express = require('express');

const app = express();
const PORT = 3279;

app.use((req, res, next) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(PORT, () => {
  console.log('Server is Running!');
});
