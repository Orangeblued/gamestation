const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the Login page at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Serve the Welcome page at a different route
app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/ball-tapper', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ball-tapper.html'));
});

app.get('/snake', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'snake.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
