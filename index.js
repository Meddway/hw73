const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'password'


app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/:message', (req, res) => {
  const message = req.params.message;
  res.send(message);
});

app.get('/encode/:message', (req, res) => {
  const message = req.params.message;
  res.send(Vigenere.Cipher(password).crypt(message));
});

app.get('/decode/:message', (req, res) => {
  const message = req.params.message;
  res.send(Vigenere.Decipher(password).crypt(message))
});

app.listen(port, () => {
  console.log('Server online on ' + port);
});