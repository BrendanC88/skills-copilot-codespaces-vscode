//Create web server
const express = require('express');
const app = express();
const port = 3000;
//Create database client
const MongoClient = require('mongodb').MongoClient;
//Connect to database
var db;
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) return console.log(err);
    db = client.db('comments'); // whatever your database name is
    //Start web server
    app.listen(port, () => {
        console.log('listening on ' + port);
    });
});

//Create route for getting all comments
app.get('/comments', (req, res) => {
    db.collection('comments').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    });
});

//Create route for posting comments
app.post('/comments', (req, res) => {
    db.collection('comments').save(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('saved to database');
        res.redirect('/');
    })
})