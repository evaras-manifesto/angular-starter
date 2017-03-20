var app = angular.module('app', []);

//load our first component
require('./components/header/header.js')(app);

// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('./components', true, /\.js$/));
