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
    try {
        console.log("inside try");
        let save_form = new company({
            companyId,
            companyName,
            linkToApply,
            logoLink,
            arrivalDate,
            ctcOffered,
            recruitmentType,
            bond,
        });
        console.log(save_form);
        try{
            save_form = await save_form.save();
            console.log("saved");
        }catch{
            console.log("some error");
        }
        res.status(200).json({ message: "Data Saved!" });
        console.log("Saved");
    } catch {
        (err) => {
            console.log(err);
            res.status(422).json({ error: err });
        };
    }
};
