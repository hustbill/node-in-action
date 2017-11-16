var express = require('express');
var router = express.Router();
var csv      = require('csv-express');
var mongoose = require('mongoose');
var Partners  = mongoose.model('partners');

/* GET home page. */
 router.get('/', function(req, res, next) {
    Partners.find({}, function(err, partners) {
        if (err)
          res.send(err);

        res.render('index', { title: 'Nodejs MongoDB export to CSV',  partners: partners });
    });
 });

 router.get('/exporttocsv', function(req, res, next) {
    var filename   = "partners.csv";
    var dataArray;
    Partners.find().lean().exec({}, function(err, partners) {
        if (err) res.send(err);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
        res.csv(partners, true);
    });
 });



module.exports = router;
