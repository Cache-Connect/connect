const User=require("../Models/register");
const bcrypt=require('bcrypt');

module.exports.login=async (req,res)=>{
    const {email,password}=req.body;
    User.findOne({ email: email}, async (err, user) => {
        if(user){
            if(bcrypt.compareSync(password, user.password)) {
                res.send({message: "Login Successful", user: user})
            } else {
                res.send({ message: "Incorrect Password"})
            }
        } else {
            res.send({message: "Invalid Email"})
        }
    }) 
}