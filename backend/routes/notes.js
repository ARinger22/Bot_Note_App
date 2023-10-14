const express = require('express');
const router = express.Router();
const Note = require('../models/Notes')
const { body, validationResult } = require('express-validator');

router.post('/addNotes', body('title', "enter a title").isLength({min : 3}),
    body('description', 'description is must').isLength({min: 5}),
    async (req, res) => {
        try {
            console.log(req.body);
            const {title, description} = req.body;
            const validation = validationResult(req);
            if(!validation.isEmpty()){
                return res.status(400).send({error : validation.array()});
            }

            const note = new Note({
                title, description
            })
            const saveNote = await note.save();
            res.json(saveNote);
        } catch (error) {
            console.log(error);   
            res.status(500).send("internal server error");
        }
    }
)

router.get('/fetchnotes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("internal server error");
    }
})

router.put('/updatenote/:id', body('title', "enter a title").isLength({ min: 3 }),
    body('description', 'description is must add something').isLength({ min: 5 }),
    async (req, res) => {
        try {
            const {title, description} = req.body;
            const newNote = {}
            newNote.title = title; 
            newNote.description = description;
            let note = await Note.findById(req.params.id);
            if(!note){
                return res.status(404).send("not found");
            }
            note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote});
            res.json({note});
        } catch (error) {
            console.error(error);
            res.status(500).send("internal server error");
        }
    }
)

router.delete('/deletenote/:id', async (req ,res) => {
    try {
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("not found");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.status(200).send({ "success": "note deleted succesfully", note });

    } catch (error) {
        
    }
})
module.exports = router; 