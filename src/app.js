const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:3000`);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Index' });
});
