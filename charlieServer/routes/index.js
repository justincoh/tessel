var express = require('express');
var router = express.Router();
var Walks = require('../models');

router.get('/',function(req,res){
	var logs;

	Walks.find({},function(err,records){
		logs = records;

		res.render('logs',{
			logs:logs
		});
	});


	// res.render('logs')
})


router.post('/',function(req,res){
	console.log('POST',req.body);
	var time = Date();
	Walks.create({time:time},function(err,success){
		console.log('CREATE CALLBACK ',success)
	})

	res.status(200).send();
})

module.exports = router;