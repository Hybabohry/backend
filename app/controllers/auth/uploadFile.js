'use strict';

const uploadFile =  (req, res, next) => {

    const file = req.file
if (!file) {
  const error = new Error('Please upload a file')
  error.httpStatusCode = 400

  return next("hey error")
}

res.status(200).json("File : "+file+" uploaded !")



}

module.exports = uploadFile;
