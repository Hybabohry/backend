'use strict';

const Note = require('../../models/notes');



const notesPerMunicipalty = async (req, res, next) => {

  const notes = await Note.find({municipality:req.body.munip}).then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    console.log(err)
    return res.status(500).json(err);
  });
  



}


const addNote = async (req,res,next) =>{
  let note = new Note(req.body)

    note = await note.save().then(async (result) => {
    
        return res.status(200).json("Note Added successfully !");
    }).catch((err)=> {
        console.log("Error adding new Note :"+err)

    }); 

}


const updateNote = async (req,res,next) => {
    const ev = await Note.findOneAndUpdate({_id:req.body.id},{$set:req.body},{new:true}).then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });
}


const deleteNote = async(req,res,next) =>{
    const ev = await Note.findOneAndDelete({_id:req.body.id}).then((result) => {
        return res.status(200).json("note Deleted");
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

module.exports = {notesPerMunicipalty,addNote,updateNote,deleteNote};