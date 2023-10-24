const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nimble-ICE' })
})

/* GET ice-flakes resource */
router.get('/ice-flakes', function (req, res, next) {
  res
    .status(200)
    .json({
      resource: 'ice-flakes',
      count: 205,
      shape: 'rectangle'
    })
})

module.exports = router
