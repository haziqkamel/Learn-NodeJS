const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Register middleware for body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
//Set global name-value
app.set('view engine', 'pug');
app.set('views', 'views'); //Where to find the templates
//Serve static files "public" with static middleware to enable access of css files
app.use(express.static(path.join(__dirname, 'public')));

//Router
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//404 Error Pages
app.use((req, res, next) => {
    res.status(404).render('404');
});

//Register Server with port
app.listen(3000);