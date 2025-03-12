const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware configuration
app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ extended: true, limit: '40kb' }));
app.use(express.static('public'));

// Import routes

exports.app = app;
