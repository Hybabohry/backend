'use strict';

const User = require('../../models/user');
const { match: matchPassword } = require('../../lib/password');
const { InvalidCredidentialsError } = require('../../constants/errors');

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("Compte non trouvé avec cette e-mail");

    
    }

    const isPasswordMatched = await matchPassword(req.body.password, user.password);

    if (!isPasswordMatched) {
     return res.status(404).json("Mot de passe incorrect");
    }

  return res.status(200).json(user)    
  } catch (error) {
    next(error);
  }
};

module.exports = login;
