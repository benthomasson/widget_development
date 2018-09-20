import React, { Component } from 'react';
import Debug from './Debug'
import Cursor from './Cursor'
import TextInput from './TextInput'
import fsm from './fsm'
import models from './models'
import util from './util'

class SVGFrame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cursorPosX: 0,
      cursorPosY: 0,
      lastKey: '',
      frameNumber: 0,
      cursorTransform: '',
      showDebug: true,
    };

    this.trace_order_seq = util.natural_numbers(0);

    this.future_messages = [];

    this.text = new models.TextInput(1, "Hello World", this, this);

    this.first_channel = new fsm.Channel(null,
                                         this.text.fsm,
                                         this);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
    this.timer = this.timer.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  send_trace_message (message) {
    console.log(message);
  }

  onMouseMove(e) {
    this.setState({
      cursorPosX: e.pageX,
      cursorPosY: e.pageY,
      cursorTransform: 'translate(' + e.pageX + ',' + e.pageY + ')'
    });

    e.preventDefault();
  }

  onMouseDown(e) {
    this.setState({
      cursorPosX: e.pageX,
      cursorPosY: e.pageY,
      cursorTransform: 'translate(' + e.pageX + ',' + e.pageY + ')'
    });
    this.first_channel.send('MouseDown', e);

    e.preventDefault();
  }

  onMouseWheel(e) {
    e.preventDefault();
  }

  onKeyDown(e) {
    this.first_channel.send('KeyDown', e);
    this.setState({
      lastKey: e.key
    });

    if (e.key === 'd') {
      this.setState({
        showDebug: !this.state.showDebug
      });
    }

    e.preventDefault();
  }

  timer() {
    this.setState({
      frameNumber: this.state.frameNumber + 1
    });
  }

  onResize(e) {
     this.setState({
       frameWidth: window.innerWidth,
       frameHeight: window.innerHeight
     });
  }

  componentDidMount() {
     //var intervalId = setInterval(this.timer, 17);
     this.setState({
     //  intervalId: intervalId,
       frameWidth: window.innerWidth,
       frameHeight: window.innerHeight
     });
     document.addEventListener('keydown', this.onKeyDown);
     window.addEventListener('resize', this.onResize)
  }

  render() {
    var frameStyle = {
      backgroundColor: '#ffffff',
      cursor: 'none'
    };
    return (
      <div className="SVGFrame">
        <svg id="frame" style={frameStyle}
        height={this.state.frameHeight}
        width={this.state.frameWidth}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseMove}
        onMouseEnter={this.onMouseMove}
        onMouseLeave={this.onMouseMove}
        onWheel={this.onMouseWheel}
        >
          <Debug {...this.state} />
          <Cursor transform={this.state.cursorTransform} />
          <TextInput {...this.text}/>
        </svg>
      </div>
    );
  }
}

export default SVGFrame;
