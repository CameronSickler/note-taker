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
        id: JSON.stringify(notesArray.length)
    };

    console.log(newNote);

    notesArray.push(newNote);

    content = JSON.stringify(notesArray);

    console.log(notesArray);

    fs.writeFile(dbFilePath, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.json(dbFilePath);

});



router.delete('/notes/:id', (req, res) => {

    let deleteByID = req.params.id

    console.log("this is notes array " + notesArray)
    let indexToDelete = notesArray.findIndex(o => o.id === deleteByID)

    notesArray.splice(indexToDelete, 1);

    content = JSON.stringify(notesArray);

    console.log("this is notes array after splice " + notesArray);

    fs.writeFile(dbFilePath, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.json(dbFilePath);

});

module.exports = router;