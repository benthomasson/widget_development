
var angular = require('angular');
var XController = require('./x.controller.js');
var xAppDirective = require('./x.app.directive.js');
var cursor = require('./cursor.directive.js');
var debug = require('./debug.directive.js');
var touch = require('./touch.directive.js');

var xApp = angular.module('xApp', [
    'monospaced.mousewheel',
    'ngTouch'
])
    .controller('XController', XController.XController)
    .directive('xxxApp', xAppDirective.xAppDirective)
    .directive('xxxCursor', cursor.cursor)
    .directive('xxxDebug', debug.debug)
    .directive('xxxTouch', touch.touch);

console.log("Loaded xApp");

exports.xApp = xApp;
