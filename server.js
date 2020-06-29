const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

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

// Handle production
if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
	app.use(cors());
	// Set static folder
	app.use(express.static(__dirname + '/public/'));

	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));
