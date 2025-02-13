// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Send the index.html file when visiting the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});