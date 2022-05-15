const fs = require('fs');
const path = require('path');
const router = require('express').Router();


// setting directly path to database as variable for ease of use
const dbFilePath = path.join(__dirname, '../../db/db.json');


// notes are made into objects and stored into a variable array
var notesArray = [];



// sends database back to client
router.get('/notes', (req, res) => {

    res.sendFile(dbFilePath);

});



// sends updated database back to client
router.post('/notes', (req, res) => {

    // creates an object w/ a unique ID using data from the client
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: JSON.stringify(notesArray.length)
    };


    // pushes the new object to global variable array
    notesArray.push(newNote);


    //stringify the global variable array in preparation for fs.writeFile
    content = JSON.stringify(notesArray);


    //overwrites the database file with modified content
    fs.writeFile(dbFilePath, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    //sends updated database back to client
    res.json(dbFilePath);

});



router.delete('/notes/:id', (req, res) => {

    //saves client data value for identifying the note element to delete
    let deleteByID = req.params.id

    // findIndex to search notesArray for the array element
    let indexToDelete = notesArray.findIndex(o => o.id === deleteByID)

    // deletes intended array element from array
    notesArray.splice(indexToDelete, 1);

    //stringify the array in prepartion for fs.writeFile
    content = JSON.stringify(notesArray);

    //overwrites the database file with modified content
    fs.writeFile(dbFilePath, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    //sends updated database back to client
    res.json(dbFilePath);

});




module.exports = router;