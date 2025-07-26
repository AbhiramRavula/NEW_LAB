const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Dummy user for demonstration
const user = { username: 'admin', password: 'admin123' };

// Login form
app.get('/', (req, res) => {
  res.send(`<form method="post" action="/login">
    <input name="username" type="text" placeholder="Username"/>
    <input name="password" type="password" placeholder="Password"/>
    <button type="submit">Login</button>
  </form>`);
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.send('Login successful! Welcome.');
  } else {
    res.send('Login failed. Please try again.');
  }
});

app.listen(3000, () => {
  console.log('Login app running on http://localhost:3000');
});
