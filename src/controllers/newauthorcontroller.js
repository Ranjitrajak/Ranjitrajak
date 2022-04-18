const Nauthormodel=require("../models/newauthor")
const Authorcreate= async function (req, res) {
    let author = req.body
    let authorCreated = await Nauthormodel.create(author)
    res.send({data: authorCreated})
}
module.exports.Authorcreate=Authorcreate