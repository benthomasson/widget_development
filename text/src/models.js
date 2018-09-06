var fsm = require('./fsm.js');
var text_fsm = require('./text.fsm.js');

function TextInput(id, value, tracer) {
    this.id = id;
    this.value = value;
    this.tracer = tracer;
    this.edit = false;
    this.selected = false;
    this.text_selected = false;
    this.fsm = new fsm.FSMController(this, "text_fsm", text_fsm.Start, tracer);
}
exports.TextInput = TextInput;
