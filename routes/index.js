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
      image: 'img/obama.jpg',
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
      name: 'Jesse',
      age: 53,
      image: 'img/michael.jpg',
      common: {
        friends: 0,
        interests: 0
      }
    },
    {
      name: 'Kitty',
      age: 102,
      image: 'img/doge.jpg',
      common: {
        friends: 42,
        interests: 1
      }
    }
  ];

  res.json(cards);
});

module.exports = router;
