var inherits = require('inherits');
var fsm = require('./fsm.js');

function _State () {
}
inherits(_State, fsm._State);


function _Selected () {
    this.name = 'Selected';
}
inherits(_Selected, _State);
var Selected = new _Selected();
exports.Selected = Selected;

function _Text () {
    this.name = 'Text';
}
inherits(_Text, _State);
var Text = new _Text();
exports.Text = Text;

function _Edit () {
    this.name = 'Edit';
}
inherits(_Edit, _State);
var Edit = new _Edit();
exports.Edit = Edit;

function _Start () {
    this.name = 'Start';
}
inherits(_Start, _State);
var Start = new _Start();
exports.Start = Start;




_Selected.prototype.onMouseDown = function (controller) {

    controller.changeState(Edit);

    controller.changeState(Text);

};
_Selected.prototype.onMouseDown.transitions = ['Edit', 'Text'];



_Text.prototype.onMouseDown = function (controller) {

    controller.changeState(Selected);

};
_Text.prototype.onMouseDown.transitions = ['Selected'];



_Edit.prototype.onKeyDown = function (controller) {

    controller.changeState(Text);

};
_Edit.prototype.onKeyDown.transitions = ['Text'];

_Edit.prototype.onMouseDown = function (controller) {

    controller.changeState(Text);

    controller.changeState(Selected);

};
_Edit.prototype.onMouseDown.transitions = ['Text', 'Selected'];



_Start.prototype.start = function (controller) {

    controller.changeState(Text);

};
_Start.prototype.start.transitions = ['Text'];

