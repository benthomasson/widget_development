/* Copyright (c) 2018 Benjamin Thomasson */
/* Copyright (c) 2017 Red Hat, Inc. */
var messages = require('./messages.js')

function Channel (fromController, toController, tracer) {
  this.tracer = tracer
  this.fromController = fromController
  this.toController = toController
  this.trace = false
}
exports.Channel = Channel

Channel.prototype.send = function (msgType, message) {
  if (this.trace && this.fromController !== null) {
    this.tracer.sendTraceMessage(new messages.ChannelTrace(this.fromController.name,
      this.toController.name,
      msgType))
  }
  this.toController.handleMessage(msgType, message)
}

function NullChannel (fromController, tracer) {
  this.tracer = tracer
  this.fromController = fromController
  this.trace = false
}

NullChannel.prototype.send = function (msgType) {
  if (this.trace && this.fromController) {
    this.tracer.sendTraceMessage(new messages.ChannelTrace(this.fromController.name,
      'null',
      msgType))
  }
}
exports.NullChannel = NullChannel

function FSMController (scope, name, initialState, tracer) {
  this.scope = scope
  this.name = name
  this.state = initialState
  this.delegateChannel = new NullChannel(this, tracer)
  this.tracer = tracer
  this.trace = false
  this.handlingMessageType = 'start'
  this.state.start(this)
  this.handlingMessageType = null
}
exports.FSMController = FSMController

FSMController.prototype.changeState = function (state) {
  var oldHandlingMessageType
  if (this.state !== null) {
    oldHandlingMessageType = this.handlingMessageType
    this.handlingMessageType = 'end'
    this.state.end(this)
    this.handlingMessageType = oldHandlingMessageType
  }
  if (this.trace) {
    this.tracer.sendTraceMessage(new messages.FSMTrace(this.tracer.traceOrderSeq(),
      this.name,
      this.state.name,
      state.name,
      this.handlingMessageType))
  }
  this.state = state
  if (state !== null) {
    oldHandlingMessageType = this.handlingMessageType
    this.handlingMessageType = 'start'
    state.start(this)
    this.handlingMessageType = oldHandlingMessageType
  }
}

FSMController.prototype.handleMessage = function (msgType, message) {
  var oldHandlingMessageType = this.handlingMessageType
  this.handlingMessageType = msgType
  var handlerName = 'on' + msgType
  if (typeof (this.state[handlerName]) !== 'undefined') {
    this.state[handlerName](this, msgType, message)
  } else {
    this.defaultHandler(msgType, message)
  }
  this.handlingMessageType = oldHandlingMessageType
}

FSMController.prototype.defaultHandler = function (msgType, message) {
  this.delegateChannel.send(msgType, message)
}

function _State () {
}

_State.prototype.start = function () {
}

_State.prototype.end = function () {
}

var State = new _State()
exports.State = State
exports._State = _State
