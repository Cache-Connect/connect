const route = require("express").Router();

const controller=require("../Controllers/register");

route.post('/register',controller.registerUser)


module.exports = route;