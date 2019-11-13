var express = require('express');

var app = express();

app.get('/products_store.html', function (req, res, next) {
    function isNonNegInt(q, return_errors = false) {
        errors = []; // assume no errors at first
        if (q == '') q = 0; // handle blank inputs as if they are 0
        if (Number(q) != q) errors.push('<font color="red">Not a number!</font>'); // Check if string is a number value
        if (q < 0) errors.push('<font color="red">Negative value!</font>'); // Check if it is non-negative
        if (parseInt(q) != q) errors.push('<font color="red">Not an integer!</font>'); // Check that it is an integer
        return return_errors ? errors : (errors.length == 0);
    }

    data = require('./static/product_data.js');
    products = data.products;

    if (typeof req.query['purchase_submit'] != 'undefined') {
        console.log(Date.now() + ': Purchase made from ip ' + req.ip + ' data: ' + JSON.stringify(req.query));
    }
    next();
});

app.use(express.static('./static'));

var listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });
