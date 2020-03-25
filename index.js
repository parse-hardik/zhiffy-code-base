const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

