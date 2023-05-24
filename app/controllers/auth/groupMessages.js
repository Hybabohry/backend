'use strict';

const groupMessages = require('../../models/groupMessage');




const getGroupMessages = async (req,res,next) => {

    const groupMessagesList = await groupMessages.find({munip:req.body.munip}).then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}



const addGroupMessage = async (req,res,next) => {

    try {
        let groupMessage = new groupMessages(req.body);
        groupMessage = await groupMessage.save().then((result) => {
            return res.status(200).json(result);

        }).catch((err) => {
            console.log("Error adding new group message :"+err)
            return res.status(500).json("Error adding new group message");
        });

    } catch (error) {
        next(error)
    }

}



module.exports = {getGroupMessages,addGroupMessage};

