'use strict';


const User = require('../../models/user');
const { hash: hashPassword } = require('../../lib/password');


const forgotPassword = async (req, res, next) =>
{
    try {
        const user = await User.findOne({ email: req.body.email });

        if(!user)
        {
            res.status(404).json("User not found");
      
            return next(error);
        }

        req.body.password = await hashPassword(req.body.password);

        user.password = req.body.password;
        

        user.save().then((result) => {
           res.status(200).json("User password updated"); 
        });

        
    } catch (error) {
        return next(error);
    }

}



module.exports = forgotPassword;
