const express = require('express')        // framework for building REST server
const bodyParser = require('body-parser');    // for being able to pull data for json string 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3003, () => {
  console.log('REST API listening on port 3003!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// // This is my data (one day it will come from database)
// let items = [
//     {id: 8,title: 'Mastering SCSS', price: 78, description: 'bla bla'},
//     {id: 9,title: 'Mastering $', price: 8, description: 'jq bla bla'},
//     {id: 10,title: 'Mastering $', price: 8, description: 'jq bla bla'},
//     {id: 15,title: 'Mastering $', price: 8, description: 'jq bla bla'}
// ];

// // *** REST API ***

// // LIST
// app.get('/item', (req, res) => {
//   res.json(items)
// })

// // READ
// app.get('/item/:id', (req, res) => {
//   const id = +req.params.id;
//   const item = items.find(currItem => currItem.id === id);
//   res.json(item)
// })

// // DELETE
// app.delete('/item/:id', (req, res) => {
//   const id = +req.params.id;
//   items = items.filter(currItem => currItem.id !== id);
// })

// // CREATE
// app.post('/item', (req, res) => {
//   const item =  req.body; 
//   item.id = findNextId();
//   items.push(item);
//   res.end('Item was added!');
// })

// // TODO: UPDATE


// function findNextId() {
//     var maxId = 0;
//     items.forEach(item => {
//         if (item.id > maxId) maxId = item.id;
//     });
//     return maxId + 1;
// }
