import React, { Component } from 'react';

import Colors from './Colors'


class TextInput extends Component {
  constructor (props) {
    super(props);

    this.state = {
      transform: 'translate(400,400)',
      text_selected: false,
      text_show_cursor: false,
      text_width: 100,
      text_cursor_pos: 90,
      text_value: this.props.text_value,
      text_text_id: 'text_1',
    };
  }
  render() {
    var textInputBoxStyle = {
      fill: 'none',
      stroke: Colors['dark'],
      strokeWidth: 1
    };
    var selected1Style = {
      fill: 'none',
      stroke: Colors['selected1'],
      strokeWidth: 3
    };
    var selected2Style = {
      fill: 'none',
      stroke: Colors['selected2'],
      strokeWidth: 6
    };
    var textSelectedStyle = {
      fill: Colors['selected'],
      stroke: 'none'
    };
    var cursorStyle = {
      fill: 'none',
      stroke: Colors['dark'],
      strokeWidth: 1
    };
    var textInputStyle = {
      fill: Colors['dark'],
      stroke: 'none'
    };
    return (
      <g transform={this.state.transform}>
          <rect x='0' y='0'
                width={this.props.width} height='20'
                style={textInputBoxStyle}
                rx='2'>
          </rect>
      {this.props.selected ?
        <g>
          <rect x='0' y='0'
                width={this.props.width} height='20'
                style={selected2Style}
                rx='4'>
          </rect>
          <rect x='0' y='0'
                width={this.props.width} height='20'
                style={selected1Style}
                rx='4'>
          </rect>
        </g>
        : null}
      {this.props.text_selected ?
          <rect x='2' y='2'
                width={this.props.cursor_pos} height='16'
                style={textSelectedStyle}>
          </rect>
        : null}
      {this.props.show_cursor ?
          <line x1={this.props.cursor_pos} x2={this.props.cursor_pos}
                y1='2' y2='18'
                style={cursorStyle}></line>
        : null }
        <text id={this.state.text_text_id}
              x='5' y='15'
              style={textInputStyle}>{this.props.value}</text>
      </g>
    );
  }
}

export default TextInput;
