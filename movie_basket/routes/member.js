var express = require('express');
var Member = require('../models/member');
var router = express.Router();

// 로그인 '/' post 방식 요청 처리
router.post('/', function (req, res, next) {
    var logInInfo = {
        member_email : req.body.member_email,
        member_pwd : req.body.member_pwd
    };

    Member.logIn(logInInfo, function (error, results) {
        if (error) {
            console.log("Connection error " + error);
            res.send(error);
        }
        else {
            res.status(201).send({result : results});
        }
    });
});

// 회원가입으로 '/signUp' 경로로 post 방식 요청 처리
router.post('/signUp', function (req, res, next) {
    var signUpInfo = {
        member_name : req.body.member_name,
        member_email : req.body.member_email,
        member_pwd : req.body.member_pwd
    };

    Member.signUp(signUpInfo, function (error, results) {
        if (error) {
            console.log("Connection error " + error);
            res.send(error);
        }
        else {
            res.status(201).send({result : results});
        }
    });
});

module.exports = router;
