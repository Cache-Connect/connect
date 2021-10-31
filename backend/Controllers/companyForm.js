const companyForm = require("../Models/companies");
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
        let save_form = new companyForm({
            companyId,
            companyName,
            linkToApply,
            logoLink,
            arrivalDate,
            ctcOffered,
            recruitmentType,
            bond,
        });
        save_form = await save_form.save();
        res.status(200).json({ message: "Data Saved!" });
        console.log("Saved");
    } catch {
        (err) => {
            res.status(422).json({ error: err });
        };
    }
};
