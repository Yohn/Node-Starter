require('dotenv').config();
const express = require('express');
//const { JsonDB, Config } = require('node-json-db');//import fs from 'fs';
//const token = process.env.ENV_KEY;
//? Simple Database to use
//! let DBUsers = new JsonDB(new Config("data/Yo/Users", true, false, '/'));
//! let DBPages = new JsonDB(new Config("data/Yo/Pages", true, false, '/'));
//! let DBBlog = new JsonDB(new Config("data/Yo/Blog", true, false, '/'));


const app = express();
app.use(express.static('www'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle POST requests to '/submit' from index.html form
app.post('/submit', async (req, res) => {
	const formData = req.body;
	const response = {
		greeting: "hello world",
		recieved: formData
	};
	// Send JSON response
	res.json(response);
});
// Route to render a specific page
app.get('/home', (req, res) => {
	res.render('home', { title: 'Page 1' });
});
// Route to render a specific page
app.get('/', (req, res) => {
	res.render('index', { title: 'Page 1' });
});


const port = process.env.PORT || 6969;
// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
