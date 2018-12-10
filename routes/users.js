var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//vip or not
router.get('/user/:id',
    (req, res, next) => {
        req.params.id === '0' ? next('route') : next();
    },
    (req, res, next) => {
        res.send('you are <b>Ordinary User</b>')
    }
);
router.get('/user/:id', (req, res, next) => {
    res.send('cool! Welcome my <b>VIP user</b>')
});

module.exports = router;
