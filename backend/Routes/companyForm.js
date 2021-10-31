const route = require("express").Router();

const controller = require("../Controllers/companyForm");

route.post("/companyform", controller.postForm);

module.exports = route;