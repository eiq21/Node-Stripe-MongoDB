var Product = require('../models/product');

var mongoose = require('mongoose');

var bluebird = require('bluebird');

mongoose.Promise = bluebird;

mongoose.connect('mongodb://127.0.0.1:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://i.ndtvimg.com/i/2016-10/hexa_650x400_71477145299.jpg',
        title: 'Auto ficho',
        description: 'descripción',
        price: 12
    }),
    new Product({
        imagePath: 'https://i.ndtvimg.com/i/2016-10/hexa_650x400_71477145299.jpg',
        title: 'Auto ficho',
        description: 'descripción',
        price: 45
    }),
    new Product({
        imagePath: 'https://i.ndtvimg.com/i/2016-10/hexa_650x400_71477145299.jpg',
        title: 'Auto ficho',
        description: 'descripción',
        price: 23
    }),
    new Product({
        imagePath: 'https://i.ndtvimg.com/i/2016-10/hexa_650x400_71477145299.jpg',
        title: 'Auto ficho',
        description: 'descripción',
        price: 45
    }),
    new Product({
        imagePath: 'https://i.ndtvimg.com/i/2016-10/hexa_650x400_71477145299.jpg',
        title: 'Auto ficho',
        description: 'descripción',
        price: 57.8
    }),
    new Product({
        imagePath: 'https://i.ndtvimg.com/i/2016-10/hexa_650x400_71477145299.jpg',
        title: 'Auto ficho',
        description: 'descripción',
        price: 23
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    console.log('hola');
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}