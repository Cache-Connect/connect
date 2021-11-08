const route = require("express").Router();

const controller = require("../Controllers/placedStudent");

route.post("/placedStudentForm", controller.postForm);
route.get("/getAllPlacedStudents", controller.getAllplacedStudents);

module.exports = route;