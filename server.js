const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
var cors = require('cors');

// Load env variables
dotenv.config({ path: './config.env' });

const app = express();

// Dev logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
	app.use(cors());
}

app.use('/api/profile', require('./api/profile'));

app.use('/api/nsgt', require('./api/nsgt'));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));
