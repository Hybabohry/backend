'use strict';

const Poubelle = require('../../models/poubelle');
const PoubelleC = require('../../models/complaintsPoubelles')



const poubellesPerMunicipalty = async (req, res, next) => {
    const poubelles = await Poubelle.find({municipality:req.body.munip});
    
    return res.status(200).json(poubelles);
  
}



const addPoubelle = async (req,res,next) =>{
  let p = new Poubelle(req.body)

    p = await p.save().then(async (result) => {
    
        return res.status(200).json("p Added successfully !");
    }).catch((err)=> {
        console.log("Error adding new Note :"+err)

    }); 

}


const updatePoubelle = async (req,res,next) => {
    const ev = await Poubelle.findOneAndUpdate({_id:req.body.id},{$set:req.body},{new:true}).then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });
}


const deletePoubelle = async(req,res,next) =>{
    const ev = await Poubelle.findOneAndDelete({_id:req.body.id}).then((result) => {
        return res.status(200).json("p Deleted");
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

const getComplaintsP = async (req,res,next) => {

  const c = await PoubelleC.find({municipality:req.body.munip}).then( async (result) => {
      return res.status(200).json(result);

  }).catch((err) => {
      return res.status(500).json("Server Error");

  });

}

const sendComplaintP = async (req,res,next) => {

  let c = new PoubelleC(req.body);

  c = await c.save().then((result) => {
      return res.status(200).json("Complaint Added successfully !");
  }).catch((err) => {
      console.log(err);
      return res.status(400).json("Error adding complaint")

  });
}

const updatePoubelleStatus = async (req,res,next) => {
  const ev = await Poubelle.findOneAndUpdate({name:req.body.poubelle},{$set:{status:req.body.status}}).then((result) => {
    return res.status(200).json("p updated");
}).catch((err) => {
    return res.status(500).json("Server Error");
});
}


const updateComplaintStatusP = async (req,res,next)=> {
  let c = await PoubelleC.findOneAndUpdate({poubelle:req.body.poubelle},{$set:{status:"processed"}},{new: true}).then((result) => {
      return res.status(200);

  }).catch((err) => {
      console.log(err)
      return res.status(500).json("Server Error");

  });

}




/*

UPDATE P STATE ON RECLAMATION

*/







  module.exports = {poubellesPerMunicipalty,addPoubelle,updatePoubelle,deletePoubelle,getComplaintsP,sendComplaintP,updateComplaintStatusP,updatePoubelleStatus};