var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tinder Swipe Cards Y\'all'});
});

router.get('/cards', function(req, res, next) {
  var cards = [
    {
      name: 'Kyle',
      age: 22,
      imgSrc: '',
      common: {
        friends: 0,
        interests: 1
      }
    },
    {
      name: 'Kristen',
      age: 28,
      imgSrc: '',
      common: {
        friends: 2,
        interests: 0
      }
    },
    {
      name: 'Cat',
      age: 98,
      imgSrc: '',
      common: {
        friends: 57,
        interests: 73
      }
    }
  ];

  res.json(cards);
});

module.exports = router;
