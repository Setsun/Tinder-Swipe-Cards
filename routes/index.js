var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tinder Swipe Cards Y\'all'});
});

router.get('/cards', function(req, res, next) {
  var cards = [
    {
      name: 'Obama',
      age: 22,
      image: 'img/obama.png',
      common: {
        friends: 0,
        interests: 1
      }
    },
    {
      name: 'JavaScript',
      age: 28,
      image: 'img/javascript.png',
      common: {
        friends: 2,
        interests: 0
      }
    },
    {
      name: 'Cat',
      age: 98,
      image: 'img/doge.png',
      common: {
        friends: 57,
        interests: 73
      }
    }
  ];

  res.json(cards);
});

module.exports = router;
