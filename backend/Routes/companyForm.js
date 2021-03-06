const route = require("express").Router();

const controller = require("../Controllers/companyForm");

route.post("/companyForm", controller.postForm);
route.get("/getAllCompanies", controller.getAllCompanies);
route.put("/updateCompany", controller.updateCompany);

module.exports = route;