var React = require('react');
var ReactDom = require('react-dom');
var Search = require('./components/search.jsx');
var products = require('./products.js');



ReactDom.render(<Search products={products}/>, document.getElementById('app'));

