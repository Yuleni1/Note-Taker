const express = require('express');
const fs = require("fs")
const path = require("path");
const { database } = require("./Develop/db/db.json")
const PORT = process.env.PORT || 3001;
const app = express();



app.get('/api/database', (req, res) => {
    res.send('Hello!');
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });