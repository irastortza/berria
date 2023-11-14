var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function(req, res, next) {
  if (req.session.views == 'undefined') req.session.views=0;
  req.session.views++
  res.render('index',{
    title: 'Eguraldia',
    session: req.session
  })
 })
 

module.exports = router;
