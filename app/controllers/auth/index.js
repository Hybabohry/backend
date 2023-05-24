"use strict";

const login = require("./login");
const { signup, findUser, setUserLocation, findUsers,testApi } = require("./signup");
const forgotPassword = require("./forgot_password");
const uploadFile = require("./uploadFile");
const {
  addPole,
  poles,
  updatePoleStatus,
  polesPerMunicipalty,
  polesMunip,
  updatePole,
  deletePole,
} = require("./poles");
const {
  addCPole,
  cPoles,
  getCPoles,
  updateComplaintPoleStatus,
} = require("./complaintsPoles");
const {
  sendComplaint,
  getComplaints,
  updateComplaintStatus,
} = require("./complaints");
const {
  poubellesPerMunicipalty,
  addPoubelle,
  updatePoubelle,
  deletePoubelle,
  getComplaintsP,
  sendComplaintP,
  updateComplaintStatusP,
  updatePoubelleStatus
} = require("./poubelle");

const {
  getArticles,
  addArticle,
  getArticlesParMunip,
  updateArticle,
  deleteArticle,
} = require("./articles");
const {
  getEvents,
  getEventsMunip,
  addEvent,
  updateEvent,
  deleteEvent,
} = require("./events");
const { getGroupMessages, addGroupMessage } = require("./groupMessages");
const { findAdmin } = require("./admin");
const {
  notesPerMunicipalty,
  addNote,
  updateNote,
  deleteNote,
} = require("./notes");

module.exports = {
  login,
  signup,
  testApi,
  findUser,
  setUserLocation,
  forgotPassword,
  uploadFile,
  addPole,
  poles,
  updatePoleStatus,
  addCPole,
  cPoles,
  sendComplaint,
  getArticles,
  addArticle,
  getEvents,
  addEvent,
  getGroupMessages,
  addGroupMessage,
  findAdmin,
  polesPerMunicipalty,
  getComplaints,
  getCPoles,
  updateComplaintStatus,
  updateComplaintPoleStatus,
  updateEvent,
  deleteEvent,
  getEventsMunip,
  getArticlesParMunip,
  updateArticle,
  deleteArticle,
  updatePole,
  deletePole,
  poubellesPerMunicipalty,
  polesMunip,
  findUsers,
  notesPerMunicipalty,
  addNote,
  updateNote,
  deleteNote,
  addPoubelle,
  updatePoubelle,
  deletePoubelle,
  getComplaintsP,
  sendComplaintP,
  updateComplaintStatusP,
  updatePoubelleStatus
};
