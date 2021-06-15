const express = require('express');
const {validatePalindrome, reverseString} = require('./utils');
const app = express();
var cors = require('cors');

const db = [];

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());

app.post('/iecho', (req, res) => {
  const {
    query: {text},
    headers,
  } = req;
  const isValidQuery = text && headers['content-type'] === 'application/json';

  if (!isValidQuery) {
    res.status(400).json({
      error: 'no text',
    });
    return res.end();
  }

  const newItem = {
    text: reverseString(text),
    palindrome: validatePalindrome(text),
  };
  db.unshift(newItem);
  return res.send({data: newItem});
});

app.get('/', (req, res) => {
  const {headers} = req;
  if (headers['content-type'] !== 'application/json') {
    return res.status(400).send();
  }

  return res.send({
    data: db,
  });
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
module.exports = app;
