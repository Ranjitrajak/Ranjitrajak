const Publishermodel=require("../models/publishermodel")
const createpublish= async function (req, res) {
    let data= req.body
    let savedata = await Publishermodel.create(data)
    res.send({data: savedata})
}
module.exports.createpublish=createpublish