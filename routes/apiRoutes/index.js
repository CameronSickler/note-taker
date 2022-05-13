const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const dbFilePath = path.join(__dirname, '../../db/db.json');

var notesArray = [];

router.get('/notes', (req, res) => {

    res.sendFile(dbFilePath);

    // fs.readFile(dbFilePath, 'UTF-8', (err, data) => {
    //     if (err) throw err
    //     console.log(data);
    //     res.json(data);
    // });


});


router.post('/notes', (req, res) => {


    notesArray.push(req.body);

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