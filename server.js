const express = require('express')        // framework for building REST server
const bodyParser = require('body-parser');    // for being able to pull data for json string 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

// var eventsRecommended = require('./EventsRecommended.js');
var emails = require('./emails-db.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// // *** REST API ***

// LIST
app.get('/email', (req, res) => {
  res.json(emails)
})

// // READ
app.get('/email/:id', (req, res) => {
  const id = +req.params.id;
  const email = emails.filter(email => email.id === id)[0];
  console.log('email', email);
  email.isRead = true;
  console.log('email', email);
  res.json(email);
})

// DELETE
app.delete('/email/:id', (req, res) => {
  const id = +req.params.id;
  emails = emails.filter(currItem => currItem.id !== id)
  res.json(emails);
})

// // CREATE
app.post('/item', (req, res) => {
  const email =  req.body; 
  email.id = findNextId();
  emails.push(email);
  res.end('Item was added!');
})

// // TODO: UPDATE


// function findNextId() {
//     var maxId = 0;
//     items.forEach(item => {
//         if (item.id > maxId) maxId = item.id;
//     });
//     return maxId + 1;
// }
