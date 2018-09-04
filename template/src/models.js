var fsm = require('./fsm.js');
var util = require('./util.js');
var animation_fsm = require('./animation.fsm.js');

function Animation(id, steps, data, scope, tracer, callback) {

    this.id = id;
    this.steps = steps;
    this.active = true;
    this.frame_number_seq = util.natural_numbers(0);
    this.frame_number = 0;
    this.data = data;
    this.callback = callback;
    this.scope = scope;
    this.interval = null;
    this.fsm = new fsm.FSMController(this, "animation_fsm", animation_fsm.Start, tracer);
}
exports.Animation = Animation;

