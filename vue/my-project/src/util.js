/* Copyright (c) 2018 Benjamin Thomasson */
/* Copyright (c) 2017 Red Hat, Inc. */

function noop () {
}
exports.noop = noop

function naturalNumbers (start) {
  var counter = start
  return function () {
    counter += 1
    return counter
  }
}
exports.naturalNumbers = naturalNumbers

function distance (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
exports.distance = distance

function rectangleIsSelected (o, x, y) {
  console.log([o.x, o.y])
  console.log([o.x + o.width, o.y + o.height])
  return (x > o.x &&
    x < o.x + o.width &&
    y > o.y &&
    y < o.y + o.height)
}
exports.rectangleIsSelected = rectangleIsSelected
