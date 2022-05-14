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
        id: JSON.stringify(notesArray.length + 1)
    };

    console.log(newNote);

    notesArray.push(newNote);

    content = JSON.stringify(notesArray);

    console.log(notesArray)

    fs.writeFile(dbFilePath, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.json(dbFilePath);

});

//still working on delete functionality

// router.delete('/notes', (req, res) => {

//     console.log(req.body);
//     res.json(dbFilePath);

// });

module.exports = router;