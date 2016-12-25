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
var myEvents = require('./events-db.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// // *** REST API ***

// // CREATE
app.post('/item', (req, res) => {
  const email =  req.body;
  // email.id = findNextId(emails);
  emails.push(email);
  res.end('Item was added!');
})
app.post('/event', (req, res) => {
  const event =  req.body;
  event.id = findNextId(myEvents.events);
  myEvents.events.push(event);
  res.json({msg: 'Event was added!'});
})

// // READ
app.get('/email/:id', (req, res) => {
  const id = +req.params.id;
  const email = emails.filter(email => email.id === id)[0];
  email.isRead = true;
  res.json(email);
})
app.get('/event/:id', (req, res) => {
  const id = +req.params.id;
  console.log('hello')
  const event = myEvents.events.filter(event => event.id == id)[0];
  res.json(event);
})

// // TODO: UPDATE

app.put('/event', (req, res) => {
  const updatedEvent =  req.body;
  console.log('editing event!')
  myEvents.events = myEvents.events.map(event => {
    if(event.id === updatedEvent.id){
      return updatedEvent
    } else {
      return event
    }
  });
  console.log('finished map!')
  res.json({msg: 'Event was updated!'});
})


function findNextId(arr) {
    var maxId = 0;
    arr.forEach(item => {
        if (+item.id > maxId) maxId = +item.id;
    });
    return maxId + 1;
}

// DELETE
app.delete('/email/:id', (req, res) => {
  const id = +req.params.id;
  emails = emails.filter(currItem => currItem.id !== id)
  res.json(emails);
})

// LIST
app.get('/email', (req, res) => {
  res.json(emails)
})
app.get('/events', (req, res) => {
  res.json(myEvents);
  res.end('Events list');
})