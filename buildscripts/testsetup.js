//this file isnt transpiled,so musst use common js ans es5

//register babel to transpile before out test run
require('babel-register')();

//disable webpack feature that mocha doesn't understand
require.extensions['.css']=function(){};

