const User = require("../Models/register");
const bcrypt=require('bcrypt');

module.exports.registerUser=async(req,res)=>{
    const { fullName, email, password} = req.body
    const saltPassword=await bcrypt.genSalt(10);
    const securePassword=await bcrypt.hash(password,saltPassword);
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({error:true,message: "User with this email has already registered"})
        } else {
            const user = new User({
                fullName,
                email,
                password:securePassword
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( {error:false, message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}