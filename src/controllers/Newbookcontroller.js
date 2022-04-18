const newauthor = require("../models/newauthor")
const Nbookmodel=require("../models/newbookmodel")
const Publishmodel=require("../models/publishermodel")
const Newcreater= async function(req,res){
 
    let data=req.body;
    if(data.author)
    {
        let authorDet=await newauthor.findOne({_id : data.author});
        if(authorDet==null)
        {
            res.send('Please enter a valid Author Id!');
        }
        else if(data.publisher)
        {
            let publisherDet=await Publishmodel.findOne({_id : data.publisher});
            if(publisherDet==null)
            {
                res.send('Please enter a valid Publisher Id!');
            }
            else
            {
                let newData=await Nbookmodel.create(data);
                res.send({msg : newData});
            }
        }
        else
        {
            res.send('Please Enter Publisher!');
        }
    }
    else
    {
        res.send('Please Enter Author!');
    }

}
const thebook= async function(req,res){
    
    let publish= await  Nbookmodel.find().populate('publisher').populate('author')
    res.send({data:publish})
}
const updateBooks = async function (req, res) {
  
    let hardCOverPublishers = await Publishmodel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
    let arrayOfPublishers = []
    
    for (let i = 0; i < hardCOverPublishers.length; i++) {
        let objId = hardCOverPublishers[i]._id 
        arrayOfPublishers.push(objId)
    }
    
    let books = await Nbookmodel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})

    res.send({data: books})
}
 
const bookup = async function(req,res){
    let authors=await newauthor.find({rating : {$gt : 3.5}}).select({_id:1})
   
    let result=[];
    for(let i=0;i<authors.length;++i)
    {
        let objId =authors[i]._id 
        result.push(objId)
        
            
    }
    let book=await Nbookmodel.updateMany({author : {$in:result}},{$inc : {price : 10}});
    
  res.send({data:book})

}

module.exports.Newcreater=Newcreater
module.exports.thebook=thebook
module.exports.bookup=bookup
module.exports.updateBooks=updateBooks
