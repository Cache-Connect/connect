const User = require("../Models/register");

module.exports.registerUser=async(req,res)=>{
    const { fullName, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User with this email has already registerd"})
        } else {
            const user = new User({
                fullName,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}