const path = require('path');

const express = require('express');

const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

const app = express();
//app.use('/account', accountRoutes);
//app.use('/services', servicesRoutes);


const { users, accounts, writeJSON } = require('./data');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
  console.log(`Listening to requests on http://localhost:3000`);
});
