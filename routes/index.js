var express = require('express');
var router = express.Router();

const Books = [
  {
    title:"",
    Author:"",
    Price:"",
    quantity:"",
    Category:"",
    description:""
  },

  {
    title:"",
    Author:"",
    Price:"",
    quantity:"",
    Category:"",
    description:""
  }
 
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


router.post("/Createnew", (req, res) => {
  console.log(req.body)
  Books.push(req.body)
  res.redirect("/Library")
  
});

router.get("/update/:id", (req, res,) => {
  console.log(req.params.id)
  
  const Newbook = Books[req.params.id]
  
  res.render ("update" ,{data:Newbook , index: req.params.id})
 


});


router.post("/update/:id",(req,res,next)=>{
  console.log(req.body)
  Books[req.params.id] = req.body
  res.redirect("/Library")
})

module.exports = router;


