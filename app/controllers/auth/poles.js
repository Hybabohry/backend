'use strict';

const Pole = require('../../models/pole');
const complaintsPoles = require('../../models/complaintsPoles');




function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

const poles = async (req, res, next) => {


    const poles = await Pole.find({}).then((result) => {
      return res.status(200).json(result);

    }).catch((err) => {
      return res.status(500).json(err);

    });;
    


}

const polesMunip = async (req,res,next)=>{
  const poles = await Pole.find({municipality:req.parms["munip"]}).then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    console.log(err)
    return res.status(500).json(err);
  });
}

const polesPerMunicipalty = async (req, res, next) => {
  const poles = await Pole.find({municipality:req.body.munip}).then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    console.log(err)
    return res.status(500).json(err);
  });
  



}


const addPole = async (req,res,next) =>{
  let pole = new Pole(req.body)

    pole = await pole.save().then(async (result) => {
    global.io.emit("Pole", pole);
        return res.status(200).json("Pole Added successfully !");
    }).catch((err)=> {
        console.log("Error adding new Pole :"+err)

    }); 

}


const updatePole = async (req,res,next) => {
    const ev = await Pole.findOneAndUpdate({name:req.body.name},{$set:req.body},{new:true}).then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });
}


const deletePole = async(req,res,next) =>{
    const ev = await Pole.findOneAndDelete({name:req.body.name}).then((result) => {
        return res.status(200).json("pole Deleted");
    }).catch((err) => {
        return res.status(500).json("Server Error");
    });

}

const updatePoleStatus = async (req,res,next) => {

  let cP = new complaintsPoles(req.body);

  cP= await cP.save().then( async (result) => {

    const pole = await Pole.findOneAndUpdate({ name: {$eq: req.body.pole}},{ $set: { status: req.body.type } },{new: true}).then(async (result)  => {
   
      global.io.emit("PoleStatusUpdate",result)
       return res.status(200).json("Pole Status Updated")
    }).catch((err) => {
      console.log(err);
    });
    
  }).catch((err) => {
      console.log(err);
      return res.status(400).json("Error adding pole complaint")
  });

 
  return 



}

module.exports = {poles,addPole,updatePoleStatus,polesPerMunicipalty,updatePole,deletePole,polesMunip};