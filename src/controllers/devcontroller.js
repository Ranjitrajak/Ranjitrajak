const Devmodel = require("../models/developermodel")
const batch_model=require("../models/batchmodel")

const createdev= async function(req,res){
   let data=req.body
    let developer= await Devmodel.create(data)
    res.send({data:developer})
}

const thebatch= async function(req,res){
    
    let developer= await  Devmodel.find().populate('batch')
    res.send({data:developer})
}
const Eligible=async function(req,res){
    let scholar= await Devmodel.find({ $and:[{ percentage:{$gte:70}},{gender:{$in:"female"}}]})
    res.send({data:scholar})
}
const specific= async function(req,res){
    data=req.query.program
const programer= await batch_model.find({program:data}).select({_id:1})

let result=[];
for(let i=0;i<programer.length;++i)
{
    let objId =programer[i]._id 
    result.push(objId)
    
        
}
let value=req.query.percentage
let Final=await Devmodel.find({$and:[{batch : {$in:result}},{percentage :value }]});
    res.send({data:Final})
}
module.exports. createdev=createdev
module.exports.thebatch=thebatch
module.exports.Eligible=Eligible
module.exports.specific=specific
