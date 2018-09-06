/* Copyright (c) 2018 Red Hat Inc */
/* Copyright (c) 2017 Ben Thomasson */
//console.log = function () {};

var angular = require('angular');
var util = require('./util.js');
var fsm = require('./fsm.js');
var models = require('./models.js');

var XController = function($scope, $window) {
    window.scope = $scope;
    $scope.frame_width = $window.innerWidth;
    $scope.frame_height = $window.innerHeight;
    $scope.cursor = {x:0, y:0, hidden:false};
    $scope.touches = [];
    $scope.num_touches = 1000;
    $scope.trace_order_seq = util.natural_numbers(0);
    $scope.animation_id_seq = util.natural_numbers(0);
    $scope.frame_number_seq = util.natural_numbers(0);
    $scope.frame_number = 0;
    $scope.debug = true;
    $scope.selected_shape = null;
    $scope.animations = {};
    console.log("Started XController");

    $scope.text = new models.TextInput(1, "Hello World", $scope);

    $scope.send_trace_message = function (message) {
        console.log(message);
    };

    $scope.move_controller = null;

    $scope.first_channel = new fsm.Channel(null,
                                           $scope.text.fsm,
                                           $scope);


    $scope.onMouseOver = function($event) {
        $event.preventDefault();
    };
    $scope.onMouseDown = function($event) {
        $scope.cursor.hidden = false;
        $scope.cursor.x = $event.x;
        $scope.cursor.y = $event.y;
        $scope.first_channel.send("MouseDown", $event);
        $event.preventDefault();
    };
    $scope.onMouseUp = function($event) {
        $scope.cursor.hidden = false;
        $scope.cursor.x = $event.x;
        $scope.cursor.y = $event.y;
        $scope.first_channel.send("MouseUp", $event);
        $event.preventDefault();
    };
    $scope.onMouseEnter = function($event) {
        $event.preventDefault();
    };
    $scope.onMouseLeave = function($event) {
        $event.preventDefault();
    };
    $scope.onMouseMove = function($event) {
        $scope.cursor.hidden = false;
        $scope.cursor.x = $event.x;
        $scope.cursor.y = $event.y;
        $scope.first_channel.send("MouseMove", $event);
        $event.preventDefault();
    };
    $scope.onMouseOver = function($event) {
        $event.preventDefault();
    };
    $scope.onMouseWheel = function($event) {
        $event.preventDefault();
    };
    $scope.onTouchMove = function($event) {
        var touches = [];
        var i = 0;
        if ($event.touches.length === 1) {
            $scope.cursor.x = $event.touches[0].screenX;
            $scope.cursor.y = $event.touches[0].screenY;
            $scope.first_channel.send("MouseMove", $event);
        }
        for (i = 0; i < $event.touches.length; i++) {
            touches.push({x: $event.touches[i].screenX,
                          y: $event.touches[i].screenY});

        }
        $scope.touches = touches;
        $event.preventDefault();
    };
    $scope.onTouchStart = function($event) {
        var touches = [];
        var i = 0;
        if ($event.touches.length === 1) {
            $scope.cursor.x = $event.touches[0].screenX;
            $scope.cursor.y = $event.touches[0].screenY;
            $scope.first_channel.send("MouseDown", $event);
        }
        for (i = 0; i < $event.touches.length; i++) {
            touches.push({x: $event.touches[i].screenX,
                          y: $event.touches[i].screenY});

        }
        $scope.touches = touches;
        $event.preventDefault();
    };
    $scope.onTouchEnd = function($event) {
        var touches = [];
        var i = 0;
        if ($event.touches.length === 0) {
            $scope.first_channel.send("MouseUp", $event);
        }
        for (i = 0; i < $event.touches.length; i++) {
            touches.push({x: $event.touches[i].screenX,
                          y: $event.touches[i].screenY});

        }
        $scope.touches = touches;
        $event.preventDefault();
    };
    $scope.onTap = function($event) {
        $event.preventDefault();
    };

    angular.element($window).bind('resize', function () {
        $scope.frame_height = $window.innerHeight;
        $scope.frame_width = $window.innerWidth;

        $scope.$digest();
    });


    console.log("Started XController");

};
exports.XController = XController;

console.log("Loaded XController");
