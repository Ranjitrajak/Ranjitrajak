const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const Nauthorcontroller=require("../controllers/newauthorcontroller")
const Publishcontroller=require("../controllers/publishcontroller")
const Newbooks=require("../controllers/Newbookcontroller")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getbook", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/create",Nauthorcontroller.Authorcreate)
router.post ("/publish",Publishcontroller.createpublish)
router.post("/book",Newbooks.Newcreater)
router.get("/the",Newbooks.thebook)
router.put("/update",Newbooks.updateBooks)
router.put("/price",Newbooks.bookup)


module.exports = router;