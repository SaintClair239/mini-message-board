const express = require('express');

const app = express();
const PORT = 3279;

const indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(indexRoutes);

app.listen(PORT, () => {
  console.log('Server is Running!');
});
