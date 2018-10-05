var express = require('express');
var router = express.Router();
const duLieu = require('./data');
let x = new duLieu();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search/:id', function(req, res, next) {
  let id = parseInt(req.params.id);
  res.send({
    'message' : 'tim thay',
    'data' : x.find(id)
  })
});

router.post('/phim', function(req, res, next) {
  res.send({
    message: 'add phim thanh cong',
    data : req.body
  });
});
router.get('/test', function(req, res, next) {
  console.log(req.query.say);
});


module.exports = router;
