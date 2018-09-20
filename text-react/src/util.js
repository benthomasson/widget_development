/* Copyright (c) 2017 Red Hat, Inc. */

function noop () {
}
exports.noop = noop;

function natural_numbers (start) {
    var counter = start;
    return function () {return counter += 1;};
}
exports.natural_numbers = natural_numbers;

function distance (x1, y1, x2, y2) {

    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}
exports.distance = distance;


function rectangle_is_selected (o, x, y) {

    console.log([x,y]);
    console.log([o.x, o.y]);
    console.log([o.x + o.width, o.y + o.height]);
    var s = (x > o.x &&
            x < o.x + o.width &&
            y > o.y &&
            y < o.y + o.height);
    console.log(s);
    return s;

}
exports.rectangle_is_selected = rectangle_is_selected;
