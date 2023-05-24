'use strict';


const complaints = require('../../models/complaints');


const User = require('../../models/user');
const complaintsPoles = require('../../models/complaintsPoles');
const articles = require('../../models/article');
const pole = require('../../models/pole');
const event = require('../../models/event')


const getComplaints = async (req,res,next) => {

    const c = await complaints.find({municipality:req.body.munip}).then( async (result) => {
        return res.status(200).json(result);

    }).catch((err) => {
        return res.status(500).json("Server Error");

    });

}

const sendComplaint = async (req,res,next) => {

    let c = new complaints(req.body);

    c = await c.save().then((result) => {
        return res.status(200).json("Complaint Added successfully !");
    }).catch((err) => {
        console.log(err);
        return res.status(400).json("Error adding complaint")

    });
}


const updateComplaintStatus = async (req,res,next)=> {
    let c = await complaints.findOneAndUpdate({description:req.body.description},{$set:{status:"processed"}},{new: true}).then((result) => {
        return res.status(200);

    }).catch((err) => {
        console.log(err)
        return res.status(500).json("Server Error");

    });

}


module.exports = {sendComplaint,getComplaints,updateComplaintStatus};