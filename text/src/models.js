var fsm = require('./fsm.js');
var text_fsm = require('./text.fsm.js');

function TextInput(id, value, scope, tracer) {
    this.scope = scope;
    this.x = 100;
    this.y = 100;
    this.id = id;
    this.value = value;
    this.pre_cursor_value = value;
    this.post_cursor_value = '';
    this.tracer = tracer;
    this.edit = false;
    this.selected = false;
    this.text_selected = false;
    this.cursor_pos = 0;
    this.update_cursor_pos();
    this.fsm = new fsm.FSMController(this, "text_fsm", text_fsm.Start, tracer);
}
exports.TextInput = TextInput;

TextInput.prototype.future_update_cursor_pos = function() {
    this.scope.future_messages.push(['UpdateCursor', {}]);
};

TextInput.prototype.update_cursor_pos = function() {

    var textInput = document.getElementById('text_' + this.id);
    console.log(this.value);
    console.log(this.value.length);
    console.log(textInput);
    if (textInput !== null) {
        console.log(textInput.getBBox());
        this.cursor_pos = textInput.getBBox().width - 4;
        console.log(this.cursor_pos);
    } else {
        this.scope.future_messages.push(['UpdateCursor', {}]);
    }
};
