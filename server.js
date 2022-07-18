const express = require('express');
const path = require("path");
const Database = require("./db/database.js");
const database = new Database();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));

console.log(database);

// API Routes
// GET: getting information from the database
// POST: posting the data to the database
// PUT: updating 
// DELETE: deleting
app.get('/api/notes', (req, res) => {
    database.getAll().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        return res.status(500).end();
    })
})

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    
    const randomNum = Math.floor((Math.random()*10000) + 1);
    newNote.id = randomNum;

    database.push(newNote).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        return res.status(500).end();
    })
})

// HTML Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/assets/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/css/styles.css'));
})
app.get('/assets/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/js/index.js'));
})  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
}); 

//   app.post('/notes', (req, res) => {
//     req.body.id = notes.length.toString();
//   })
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  })