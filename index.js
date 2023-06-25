const express = require('express');
const app = express();


app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.sendFile(__dirname  +  '/public/login.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

// POST route to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate the login credentials
  if (username === 'validUsername' && password === 'validPassword' ) {
    // Redirect to the home page
    res.redirect('/home');
  } else if(username === 'invalidUsername' && password === 'invalidPassword') {
    // Handle invalid login
    res.status(401).send('Invalid username or password');
  }
});


app.listen(8000, () => {
  console.log('Server started on http://localhost:8000');
});
