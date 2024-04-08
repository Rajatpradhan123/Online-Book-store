var express = require('express');
var router = express.Router();

const Books = [
 
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',);
});

router.get('/Create', function (req, res, next) {
  res.render('Create', {});
});




router.get('/About', function (req, res, next) {
  res.render("About", {});
});



router.get("/Library", (req, res,) => {
  console.log(req.params)
  res.render("Library", { Books:Books })
});


router.get('/delete/:id', (req, res)=> {
Books.splice(req.params.id,1)
res.redirect("/Library")
});


router.post("/Createnew", (req, res,) => {
  console.log(req.body)
  Books.push(req.body)
  res.redirect("/Library")
  
});

module.exports = router;


