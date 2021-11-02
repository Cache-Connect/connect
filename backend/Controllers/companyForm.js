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
        companyId,
        companyName,
        linkToApply,
        logoLink,
        arrivalDate,
        ctcOffered,
        recruitmentType,
        bond,
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
        let result = await company.find();
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports.updateCompany = async (req, res) => {
    try{
        const idCmp = parseInt(req.body.companyId);
        let result=await company.find({companyId:idCmp});
        console.log(result);
        if(result.length==0)
        {
            res.json({message:`Unable to update, company with ID #${idCmp} not exist`})
            return;
        }
        else
        {
            await company.findOneAndUpdate({companyId:idCmp},req.body)
            .then(()=>{
                res.status(200).json({message:"Data updated successfully"});
            })
            .catch((err)=>{
                res.status(500).json({error:err});
            })
        }
    }catch(err){
        console.log(err);
    }
}