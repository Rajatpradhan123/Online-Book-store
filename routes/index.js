var express = require('express');
var router = express.Router();

const Book = []

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Create', function (req, res, next) {
  res.render('Create', {});
});



router.get('/Readall', function (req, res, next) {
  res.render("Readall", {});
});


router.get('/About', function (req, res, next) {
  res.render("About", {});
});

// router.post('/registor', (req, res,next)=> {
//   console.log(req.body)
//   res.render("registor" ,{data:req.body})
// });



router.post("/Library", (req, res,) => {
  console.log(req.body)
  res.render("Library", { data: req.body })
});


module.exports = router;


