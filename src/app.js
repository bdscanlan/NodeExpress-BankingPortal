const path = require('path');
const express = require('express');
const app = express();

const { users, accounts, writeJSON } = require('./data');


const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/profile', (req, res) => {
  res.render('profile', { user: users[0] });
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Account Summary', accounts: accounts });
});

app.listen(3000, () => {
  console.log(`Listening to requests on http://localhost:3000`);
});
