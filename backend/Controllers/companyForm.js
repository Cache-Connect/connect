const company = require("../Models/company");
module.exports.postForm = async (req, res, next) => {
    const {
        companyId,
        companyName,
        linkToApply,
        logoLink,
        arrivalDate,
        ctcOffered,
        recruitmentType,
        bond,
    } = req.body;
    console.log("Request Body from company Form", req.body);
        let save_form = new company({
            companyId:companyId,
            companyName,
            linkToApply,
            logoLink,
            arrivalDate,
            ctcOffered, 
            recruitmentType,
            bond:bond,
        });
        // console.log(save_form);
        save_form.save()
        .then(data=>{
            console.log('Saved')
            res.json(data);
        })
        .catch(error=>{
            console.log(error)
            res.json(error);
        })
};
