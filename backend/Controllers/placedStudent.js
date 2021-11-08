const placedStudent = require("../Models/placedStudent");
module.exports.postForm = async (req, res, next) => {
    console.log(req.body)
    const {
        enrollmentNo,
        companyName,
        fullName,
        branch,
        batch,
        linkedIn,
        ctc,
        recruitmentType,
    } = req.body;
    console.log("Request Body from hallOfFame Form", req.body);
    let save_form = new placedStudent({
        enrollmentNo,
        companyName,
        fullName,
        branch,
        batch,
        linkedIn,
        ctc,
        recruitmentType,
    });
    // console.log(save_form);
    await save_form.save()
        .then(data => {
            console.log('Saved')
            res.status(200).json(data);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
};

module.exports.getAllCompanies = async (req, res) => {
    try {
        let result = await placedStudent.find();
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}