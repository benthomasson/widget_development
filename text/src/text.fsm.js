var inherits = require('inherits');
var fsm = require('./fsm.js');


function _Start () {
    this.name = 'Start';
}
inherits(_Start, fsm._State);
var Start = new _Start();
exports.Start = Start;

function _Edit () {
    this.name = 'Edit';
}
inherits(_Edit, fsm._State);
var Edit = new _Edit();
exports.Edit = Edit;

function _Ready () {
    this.name = 'Ready';
}
inherits(_Ready, fsm._State);
var Ready = new _Ready();
exports.Ready = Ready;




_Start.prototype.start = function (controller) {

    controller.changeState(Ready);

};
_Start.prototype.start.transitions = ['Ready'];


_Edit.prototype.start = function (controller) {
    controller.scope.edit = true;
    controller.scope.selected = true;
};

_Edit.prototype.end = function (controller) {
    controller.scope.edit = false;
    controller.scope.selected = false;
};

_Edit.prototype.onMouseDown = function (controller) {

    controller.changeState(Ready);

};
_Edit.prototype.onMouseDown.transitions = ['Ready'];



_Ready.prototype.onMouseDown = function (controller) {

    controller.changeState(Edit);

};
_Ready.prototype.onMouseDown.transitions = ['Edit'];

