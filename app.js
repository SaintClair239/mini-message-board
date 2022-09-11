const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3279;

const indexRoutes = require('./routes/index');
const newMessageRoutes = require('./routes/new-message');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);
app.use(newMessageRoutes);

app.listen(PORT, () => {
  console.log('Server is Running!');
});
