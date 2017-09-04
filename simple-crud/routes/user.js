var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/user', ['users']);

router.post('/user', function (req, res, next) {
    var user = req.body;
    if (!user.name || !(user.email + '')) {
        res.status(400);
        res.json({
            "error": "BAD DATA"
        });
    } else {
        db.users.save(user, function (err, users) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
});

router.get('/users', function (req, res, next) {
    db.users.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
});

router.delete('/user/:id', function (req, res, next) {
    db.users.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

router.put('/user/:id', function (req, res, next) {
    var user = req.body;
    var update = {};

    if (user.name) {
        update.name = user.name;
    }

    if (user.email) {
        update.email = user.email;
    }

    if (!update) {
        res.status(400);
        res.json({
            "Error": "Bad data, dude"
        })
    } else {
        db.users.update({ _id: mongojs.ObjectId(req.params.id) }, update, {}, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
});

router.post('/login', function (req, res, next) {

    var user = req.body;
    if (!user.name || !(user.email + '')) {
        res.status(400);
        res.json({
            "error": "BAD DATA"
        });
    } else {
        db.users.findOne({ name: user.name, email: user.email }, function (err, users) {
            if (err) {
                res.send(err);
            }
            res.json(users);
            if (users == null) {
                console.log('Something possibly wrong!');
            } else {
                console.log('Everything works!' + JSON.stringify(users));
            }
        });
    }
});


module.exports = router;
