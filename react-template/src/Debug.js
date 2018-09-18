import React, { Component } from 'react';

class Debug extends Component {
  render() {
    var debugStyle = {
      fill: 'rgb(77,200,242)',
      stroke: 'none'
    };
    return (
      <g>
        <text x="400" y="400" style={debugStyle}>Cursor: ({this.props.cursorPosX}, {this.props.cursorPosY})</text>
        <text x="400" y="420" style={debugStyle}>Key: {this.props.lastKey} </text>
        <text x="400" y="440" style={debugStyle}>Frame #: {this.props.frameNumber} </text>
      </g>
    );
  }
}

export default Debug;
