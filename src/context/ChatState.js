import React, { useState } from 'react';
import {View} from 'react-native';
import NoteContext from './ChatContext';

const ChatState =(props) => {
    const init = []
    const [notes, setNotes] = useState(init);
    const host = "http://172.23.4.113:5000";

    const getNotes = async () => {
        const url = `${host}/api/notes/fetchnotes`;
        const responce = await fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            },
        })

        const json = await responce.json();
        setNotes(json);
    }

    const addNotes = async (title, description) => {
        const url = `${host}/api/notes/addNotes`;
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        })

        const note = {
            "_id": `652a5b0105461a${title}2769681145`,
            "title": title,
            "description": description,
        }

        setNotes(notes.concat(note));
    }

    const editNotes = async (id, title, description) => {
        const url = `${host}/api/notes/updatenote/${id}`;
        const responce = await fetch(url, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({title, description})
        })

        const noteIndex = notes.findIndex((note) => note._id == id)
        if(noteIndex != -1){
            const updateNote = notes[noteIndex]
            updateNote.title = title;
            updateNote.description = description;

            const updatedNotes = notes;
            updatedNotes[noteIndex] = updateNote;
            setNotes(updatedNotes)
        }
    }

    const deleteNotes = async (id) => {
        const url = `${host}/api/notes/deletenote/${id}`;
        const responce = await fetch(url,{
            method: 'DELETE',
        })
        const updateNote = notes.filter((note) => note._id !== id);
        setNotes(updateNote);
    }

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNotes, deleteNotes, editNotes }} >
            {props.children}
        </NoteContext.Provider>
    );
};

export default ChatState;
