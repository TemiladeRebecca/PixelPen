const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /notes'
    });
});

router.post('/', (req, res, next) => {
    const note = {
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag
    };
    res.status(200).json({
        message: 'Handling POST requests to /notes',
        createdNote: note
    });
});

router.get('/:noteId', (req, res, next) => {
    const id = req.params.noteId;
    if(id === 'special') {
        res.status(200).json({
            message: "Special",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You passed an id"
        });
    }
});

router.patch('/:noteId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling PATCH requests to /notes'
    });
});

router.delete('/:noteId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling DELETE requests to /notes'
    });
});

module.exports = router;