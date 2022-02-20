const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); //../views/shop.html

    const products = adminData.products;
    ///Use default templating engine
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports = router;