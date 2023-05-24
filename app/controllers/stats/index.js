'use strict';

const User = require('../../models/user');
const complaintsPoles = require('../../models/complaintsPoles');
const complaints = require('../../models/complaints');
const articles = require('../../models/article');
const pole = require('../../models/pole');
const event = require('../../models/event')
const poubelle = require('../../models/poubelle')





const usersPerMunicipalty =  async (req, res, next) => {

    await User.countDocuments({munip:req.body.munip}).exec().then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json("Server Error");
    });

}

const polesPerMunicipalty =  async (req, res, next) => {

    const docCount = await pole.countDocuments({municipality:{$eq:req.body.munip}}).exec();
    return res.status(200).json(docCount);

}

const reclamationsT_PerMunicipalty =  async (req, res, next) => {

    await User.find({munip:req.body.munip}).then( async (result) => {
        var arr =[];
        result.forEach(element => {
            arr.push(element.userid);
        });
        const docCount = await complaints.countDocuments({status:"processed",municipality:req.body.munip});
        return res.status(200).json(docCount);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

const reclamationsPT_PerMunicipalty =  async (req, res, next) => {

    await pole.find({municipality:req.body.munip}).then(async (result)  => {


        var arr =[];
        result.forEach(element => {
            arr.push(element.name);
        });
        const docCount = await complaintsPoles.countDocuments({pole:{$in:arr},status:"processed"});
        return res.status(200).json(docCount);
        
    }).catch((err) => {
        console.log(err);
        return res.status(500).json("Server Error");
    }); 

}

const reclamationsPNT_PerMunicipalty =  async (req, res, next) => {

    await pole.find({municipality:req.body.munip}).then(async (result)  => {


        var arr =[];
        result.forEach(element => {
            arr.push(element.name);
        });
        console.log(arr);
        const docCount = await complaintsPoles.countDocuments({pole:{$in:arr},status:"processing"});
        return res.status(200).json(docCount);
        
    }).catch((err) => {
        console.log(err);
        return res.status(500).json("Server Error");
    }); 
}

const reclamationsNT_PerMunicipalty =  async (req, res, next) => {
    await User.find({munip:req.body.munip}).then( async (result) => {
        var arr =[];
        result.forEach(element => {
            arr.push(element.name);
        });
        const docCount = await complaints.countDocuments({status:"processing",municipality:req.body.munip});
        return res.status(200).json(docCount);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

const eventsPerMunicipalty =  async (req, res, next) => {
    await event.countDocuments({munip:req.body.munip}).exec().then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        console.log(err)
        return res.status(500).json("Server Error");
    });

}

const trashcansPerMunicipalty =  async (req, res, next) => {
    await poubelle.countDocuments({munip:req.body.munip}).exec().then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        console.log(err)
        return res.status(500).json("Server Error");
    });

}


module.exports = {trashcansPerMunicipalty,usersPerMunicipalty,polesPerMunicipalty,reclamationsT_PerMunicipalty,reclamationsPT_PerMunicipalty,reclamationsPNT_PerMunicipalty,reclamationsNT_PerMunicipalty,eventsPerMunicipalty}