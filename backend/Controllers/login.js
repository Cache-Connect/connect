const User=require("../Models/register");

module.exports.login=async (req,res)=>{
    const {email,password}=req.body;
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Incorrect Password"})
            }
        } else {
            res.send({message: "Invalid Email"})
        }
    }) 
}