

'use strict';

const complaintsPoles = require('../../models/complaintsPoles');
const cP = require('../../models/complaintsPoles')


const User = require('../../models/user');
const articles = require('../../models/article');
const pole = require('../../models/pole');
const event = require('../../models/event')


const cPoles = async (req, res, next) =>
{
    
    const complaints = await cP.find();

    global.io.emit("ComplaintsPolesList", complaints);
    
    return res.status(200).json("poles complains list sent Socket");

}

//updateComplaintPoleStatus

const updateComplaintPoleStatus = async (req,res,next)=>{
    const c = await cP.findOneAndUpdate({pole:req.body.pole},{$set:{status:"processed"}},{new:true});

    return res.status(200).json(c);

}

const getCPoles = async (req,res,next)=> {


     const p = await pole.find({municipality:req.body.munip}).then( async (result) => {

        var arr =[];
        result.forEach(element => {
            arr.push(element.name);
        });

        await complaintsPoles.find({pole:{$in:arr}}).then( async (data)=> {
            return res.status(200).json(data);
        }).catch((err) => {
            return res.status(500).json("Server Error");
    
        });

    
        
     }).catch((err) => {
        return res.status(500).json("Server Error");

     }); 
}

const addCPole = async (req,res,next) => {
    let cP = new complaintsPoles(req.body);

    cP= await cP.save().then((result) => {

        return res.status(200).json("Complaint on Pole Added successfully !");

    }).catch((err) => {
        return res.status(400).json("Error adding pole complaint")
    });
}


module.exports = {cPoles,addCPole,getCPoles,updateComplaintPoleStatus}