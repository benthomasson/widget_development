/* Copyright (c) 2018 Benjamin Thomasson */
/* Copyright (c) 2017 Red Hat, Inc. */

function FSMTrace (order, fsmName, fromState, toState, recvMessageType) {
  this.msgType = 'FSMTrace'
  this.order = order
  this.sender = 0
  this.traceId = 0
  this.fsmName = fsmName
  this.fromState = fromState
  this.toState = toState
  this.recvMessageType = recvMessageType
}
exports.FSMTrace = FSMTrace

function ChannelTrace (fromFsm, toFsm, sentMessageType) {
  this.msgType = 'ChannelTrace'
  this.sender = 0
  this.traceId = 0
  this.fromFsm = fromFsm
  this.toFsm = toFsm
  this.sentMessageType = sentMessageType
}
exports.ChannelTrace = ChannelTrace
