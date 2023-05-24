'use strict';

const events = require('../../models/event');





const getEvents = async (req,res,next) =>{

    const eventsList = await events.find().then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

const getEventsMunip = async (req,res,next) => {
    const eventsList = await events.find({munip:req.body.munip}).then((result) => {

        return res.status(200).json(result);

    }).catch((err) => {
        return res.status(500).json("Server Error");
    });
}

const addEvent = async (req,res,next) => {

    try {
        let event = new events(req.body);

        event = await event.save().then((result) => {
            return res.status(200).json(result);

        }).catch((err) => {
            console.log("Error adding new event :"+err)
            return res.status(500).json("Error adding new event");
        });

    } catch (error) {
        next(error)
    }
}


const updateEvent = async (req,res,next) => {
    const ev = await events.findOneAndUpdate({_id:req.body._id},{$set:req.body},{new:true}).then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });
}

const deleteEvent = async(req,res,next) =>{
    const ev = await events.findOneAndDelete({_id:req.body._id}).then((result) => {
        return res.status(200).json("Event Deleted");
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}


module.exports = {getEvents,addEvent,getEventsMunip,updateEvent,deleteEvent};

