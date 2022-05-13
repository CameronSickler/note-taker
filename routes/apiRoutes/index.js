const fs = require('fs');
const path = require('path');
const router = require('express').Router();


router.get('/notes', (req, res) => {


    fs.readFile(path.join(__dirname, '../../db/db.json'), 'UTF-8', (err, data) => {
        if (err) throw err
        console.log(data);
    });

    // res.json(data);



    // fs.writeFile('./notes', data, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

});





module.exports = router;

//fs readfile does a string. Will need to covert to usable data type

// with the router.get, router.post needs to use fs.writeFile to push content to db.json