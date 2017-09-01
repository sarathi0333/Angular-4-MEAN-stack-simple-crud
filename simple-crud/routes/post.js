var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/user', ['posts']);


router.post('/post', function (req, res, next) {
    var post = req.body;
    if (!post.user || !(post.content + '')) {
        res.status(400);
        res.json({
            "error": "BAD DATA"
        });
    } else {
        db.posts.save(post, function (err, posts) {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    }
});

router.get('/posts', function (req, res, next) {
    db.posts.find(function (err, posts) {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
});

module.exports = router;