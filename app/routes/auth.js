'use strict';

const express = require('express');
const authCtrl = require('../controllers/auth');
const multer=require('multer')  
const path= require('path')  

const router = express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+'../../../uploads/images')
  },
  
  filename: function (req, file, cb) {
  cb(null, file.originalname.replace(/\s+/g, "-"))
  }
  })

  var storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname+'../../../uploads/images/articles')
  },
  
  filename: function (req, file, cb) {
  cb(null, file.originalname.replace(/\s+/g, "-"))
  }
  })
  
  var upload = multer({ storage: storage })
  var uploadArticle= multer({ storage: storage1 })

router.post('/findUser',authCtrl.findUser);
router.post('/findUsers',authCtrl.findUsers);
router.post('/signup', authCtrl.signup);
router.get('/test', authCtrl.testApi);
router.post('/findAdmin',authCtrl.findAdmin)
router.post('/setUserLocation',authCtrl.setUserLocation)
router.post('/login', authCtrl.login);
router.post('/resetPassword',authCtrl.forgotPassword);


router.get('/getAllPoles',authCtrl.poles);
router.post('/getPolesMunip',authCtrl.polesPerMunicipalty)
router.post('/updatePole',authCtrl.updatePole);
router.post('/deletePole',authCtrl.deletePole);
router.post('/addPole',authCtrl.addPole);
router.post('/updatePoleStatus',authCtrl.updatePoleStatus)
router.post('/updateComplaintPoleStatus',authCtrl.updateComplaintPoleStatus)

router.post('/getPoubelles',authCtrl.poubellesPerMunicipalty)
router.post('/addPoubelle',authCtrl.addPoubelle)
router.post('/updatePoubelle',authCtrl.updatePoubelle)
router.post('/deletePoubelle',authCtrl.deletePoubelle)
router.post('/updatePoubelleStatus',authCtrl.updatePoubelleStatus)


router.post('/getComplaintsP',authCtrl.getComplaintsP)
router.post('/sendComplaintP',authCtrl.sendComplaintP)
router.post('/updateComplaintStatusP',authCtrl.updateComplaintStatusP)

//getComplaintsP,sendComplaintP,updateComplaintStatusP

router.post('/addPC',authCtrl.addCPole)
router.post('/sendComplaint',authCtrl.sendComplaint)
router.post('/getComplaints',authCtrl.getComplaints)
router.post('/getPC',authCtrl.getCPoles)
router.post('/updateComplaintStatus',authCtrl.updateComplaintStatus)


router.get('/getArticles',authCtrl.getArticles)
router.post('/addArticle',authCtrl.addArticle)
router.post('/getArticlesParMunip',authCtrl.getArticlesParMunip)
router.post('/updateArticle',authCtrl.updateArticle)
router.post('/deleteArticle',authCtrl.deleteArticle)

router.post('/getEvents',authCtrl.getEvents)
router.post('/getEventsMunip',authCtrl.getEventsMunip)
router.post('/addEvent',authCtrl.addEvent)
router.post('/updateEvent',authCtrl.updateEvent)
router.post('/deleteEvent',authCtrl.deleteEvent)

router.post('/getGroupMessages',authCtrl.getGroupMessages)
router.post('/addGroupMessage',authCtrl.addGroupMessage)

router.post('/uploadFile',upload.single('myFile'),authCtrl.uploadFile)
router.post('/uploadArticle',uploadArticle.single('myFile'),authCtrl.uploadFile)

//notesPerMunicipalty,addNote,updateNote,deleteNote
router.post('/notesPerMunicipalty',authCtrl.notesPerMunicipalty)
router.post('/addNote',authCtrl.addNote)
router.post('/updateNote',authCtrl.updateNote)
router.post('/deleteNote',authCtrl.deleteNote)



module.exports = router;
