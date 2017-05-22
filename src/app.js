// var readdirp = require('readdirp');

// var glob = require( 'glob' );

var app = angular.module('app', ['ui.router']);

// glob( './components/**/*.js', function( err, files ) {
//     console.log( files );
// });

//load our components (should be automated really)
require('./routes')(app);
require('./components/header/header')(app);
require('./components/cookie/cookie')(app);
require('./components/logo/logo')(app);
require('./components/logindetails/logindetails')(app);
require('./components/backbutton/backbutton')(app);
require('./screens/home/home-screen')(app);

// function requireAll(r) { r.keys().forEach(r); }
// requireAll(require.context('./', true, /\.js$/));

// var context = require.context('./', true, /\.(js)$/);
// var files={};
//
// context.keys().forEach((filename)=>{
//     console.log(filename);
//     require(`${filename}`)
//     files[filename] = context(filename);
// });
// console.log(files); //you have file contents in the 'files' object, with filenames as keys


// console.info();
