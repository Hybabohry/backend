'use strict';

const express = require('express');
const statCtrl = require('../controllers/stats');


const router = express.Router();



router.post('/getUsersCount',statCtrl.usersPerMunicipalty)
router.post('/getPolesCount',statCtrl.polesPerMunicipalty)
router.post('/getRecT',statCtrl.reclamationsT_PerMunicipalty)
router.post('/getRecNT',statCtrl.reclamationsNT_PerMunicipalty)
router.post('/getRecPT',statCtrl.reclamationsPT_PerMunicipalty)
router.post('/getRecPNT',statCtrl.reclamationsPNT_PerMunicipalty)
router.post('/getEventsCount',statCtrl.eventsPerMunicipalty)
router.post('/trashcansPerMunicipalty',statCtrl.trashcansPerMunicipalty)



module.exports = router;