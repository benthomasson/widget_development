/* Copyright (c) 2018  Benjamin Thomasson */

const templateUrl = require('./x.app.partial.html');

function xAppDirective () {

    return { restrict: 'E', templateUrl };
}
exports.xAppDirective = xAppDirective;
