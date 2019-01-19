const express = require('express');
const router = express.Router();
const City = require('../models/cityScheme');

// Index Route
router.get('/', (req, res) => {
    City.find({}, (err, citiesList) => {
        if (err) {
            res.send(err)
        } else {
            res.render('index.ejs', {
                cities: citiesList
            })
        }
    })
})


// New Route
router.get('/new', (req, res) => {
    res.render('new.ejs');
})

// Create Route - from New
router.post('/', (req, res) =>{
    City.create(req.body, (err, createdCities) => {
        if(err){
            res.send(err)
        } else {
            res.redirect('/cities')
        }
    })
})

// Show Route
router.get('/:id', (req, res) => {
City.findById({_id: req.params.id}, (err, shownCity) => {
    if(err) {
        res.send(err)
    } else {
        res.render('show.ejs', {
            city: shownCity
            })
        }
    })
})

// Edit Route
router.get('/:id/edit', (req, res) => {
    City.findById({_id: req.params.id}, (err, editCity) => {
        if(err){
            res.send(err)
        } else {
            res.render('edit.ejs', {
                city: editCity
            })
        }
    })
})

// Update Route
router.put('/:id', (req, res) => {
    City.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updateCity) => {
        if(err){
            res.send(err)
        } else {
            res.redirect('/cities')
        }
    })
})

// Delete Route
router.delete('/:id', (req, res) => {
    City.findByIdAndRemove({_id: req.params.id}, (err, deletedCity) => {
        if(err){
            res.send(err)
        } else {
            res.redirect('/cities')
        }
    })
})



module.exports = router;