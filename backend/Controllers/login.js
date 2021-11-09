const User=require("../Models/register");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

module.exports.login=async (req,res)=>{
    const {email,password}=req.body;
    User.findOne({ email: email}, async (err, user) => {
        if(user){
            if(bcrypt.compareSync(password, user.password)) {
                const token=jwt.sign({
                    email:user.email,
                },'secret123')
                res.send({message: "Login Successful", user: {user,token}})
            } else {
                res.send({ message: "Incorrect Password",user: false})
            }
        } else {
            res.send({message: "Invalid Email",user:false})
        }
    }) 
}