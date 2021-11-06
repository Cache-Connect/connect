const route = require("express").Router();

const controller=require("../Controllers/login");

route.post('/login',controller.login)


module.exports = route;