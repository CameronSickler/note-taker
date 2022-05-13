const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const dbFilePath = path.join(__dirname, '../../db/db.json');

var notesArray = [];

router.get('/notes', (req, res) => {

    res.sendFile(dbFilePath);

});


router.post('/notes', (req, res) => {

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: (notesArray.length + 1)
    };

    notesArray.push(newNote);

    console.log(notesArray);

    content = JSON.stringify(notesArray);

    fs.writeFile(dbFilePath, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.json(dbFilePath);

});


module.exports = router;

//fs readfile does a string. Will need to covert to usable data type

// with the router.get, router.post needs to use fs.writeFile to push content to db.json