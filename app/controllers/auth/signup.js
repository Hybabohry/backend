'use strict';

const User = require('../../models/user');
const { hash: hashPassword } = require('../../lib/password');




// Define controller methods
const testApi = (req, res) => {
  res.json({ message: 'Test API endpoint is working' });
};
const signup = async (req, res, next) => {
   try {
    
   
    let user = new User(req.body);
    user = await user.save().then((result) => {
      return res.status(200).json(result);
    }).catch((err) => {
      console.log("Error adding new User :"+err)
      return res.status(500).json("Error adding new Usert");
    });

  } catch (error) {
    next(error);
  }
};



const findUser = async (req,res,next) => {
  const user =  User.findOne({ userid: req.body.userid }).then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    console.log("Error geting User :"+err)
      return res.status(404).json("User not found");
  });
};

const findUsers = async (req,res,next) => {
  const user =  User.find({ munip: req.body.munip }).then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    console.log("Error geting Users :"+err)
      return res.status(404).json("Users not found");
  });
};



const setUserLocation = async (req,res,next) => {

  const user = await User.findOneAndUpdate({ userid: req.body.userid },{$set:{adress:req.body.adress}}, {new:true}).then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    console.log("Error geting User :"+err)
      return res.status(404).json("User not found");
  });

  /*  "adress": {
    "type": "Point",
    "coordinates": [
      36.8368056,
      10.1509023
    ],
    "_id": {
      "$oid": "6386a7ef10d573698093c990"
    }
  }, */
};

module.exports = {signup,findUser,setUserLocation,findUsers,testApi};
