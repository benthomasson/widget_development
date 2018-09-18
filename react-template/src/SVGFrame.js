import React, { Component } from 'react';
import Debug from './Debug'
import Cursor from './Cursor'

class SVGFrame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cursorPosX: 0,
      cursorPosY: 0,
      lastKey: '',
      frameNumber: 0,
      cursorTransform: ''
    };

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseWheel = this.onMouseWheel.bind(this);
    this.timer = this.timer.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onMouseMove(e) {
    this.setState({
      cursorPosX: e.pageX,
      cursorPosY: e.pageY,
      cursorTransform: 'translate(' + e.pageX + ',' + e.pageY + ')'
    });

    e.preventDefault();
  }

  onMouseWheel(e) {
    e.preventDefault();
  }

  onKeyDown(e) {
    this.setState({
      lastKey: e.key
    });

    e.preventDefault();
  }

  timer() {
    this.setState({
      frameNumber: this.state.frameNumber + 1
    });
  }

  componentDidMount() {
     var intervalId = setInterval(this.timer, 17);
     // store intervalId in the state so it can be accessed later:
     this.setState({intervalId: intervalId});
     document.addEventListener('keydown', this.onKeyDown);
  }

  render() {
    var frameStyle = {
      backgroundColor: '#ffffff',
      cursor: 'none'
    };
    var frameWidth = window.innerWidth;
    var frameHeight = window.innerHeight;
    return (
      <div className="SVGFrame">
        <svg id="frame" style={frameStyle}
        height={frameHeight}
        width={frameWidth}
        onMouseMove={this.onMouseMove}
        onMouseDown={this.onMouseMove}
        onMouseUp={this.onMouseMove}
        onMouseEnter={this.onMouseMove}
        onMouseLeave={this.onMouseMove}
        onWheel={this.onMouseWheel}
        >
          <Debug frameNumber={this.state.frameNumber}
                 lastKey={this.state.lastKey}
                 cursorPosX={this.state.cursorPosX}
                 cursorPosY={this.state.cursorPosY}/>
          <Cursor transform={this.state.cursorTransform} />
        </svg>
      </div>
    );
  }
}

export default SVGFrame;
