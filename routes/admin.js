const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

//Variables
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // console.log(req.body); //print request body {title: 'book'}
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;