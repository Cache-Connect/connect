const route = require("express").Router();

const controller = require("../Controllers/companyForm");

route.post("/companyForm", controller.postForm);

module.exports = route;