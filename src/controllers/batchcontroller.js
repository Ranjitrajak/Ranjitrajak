const Batchmodel = require("../models/batchmodel")

const createbatch= async function(req,res){
   let data=req.body
    let Batch= await Batchmodel.create(data)
    res.send({data:Batch})
}
module.exports. createbatch=createbatch