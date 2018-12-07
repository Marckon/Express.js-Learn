var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/books/:bookId',(req,res)=>res.send(`your bookId is ${req.params.bookId}`));
router.get('/flight/:from-:to',(req,res)=>res.send(`you're flying from ${req.params.from} to ${req.params.to}`));

module.exports = router;
