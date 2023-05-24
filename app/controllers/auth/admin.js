'use strict';

const Admin = require('../../models/admin');



const findAdmin = async (req,res,next) =>{
    const admin = await Admin.findOne({ userid: req.body.userid }).then((result) => {
        return res.status(200).json(result);
      }).catch((err) => {
        console.log("Error geting User :"+err)
          return res.status(404).json("User not found");
      });
}


module.exports = {findAdmin};