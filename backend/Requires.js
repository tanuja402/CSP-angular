const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Milkcollections = require('./Routes/Milkcollections');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/Milkcollections', Milkcollections);






module.exports = app;