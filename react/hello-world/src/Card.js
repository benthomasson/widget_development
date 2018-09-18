import React from 'react';
import Square from './Square';
import Label from './Label';

class Card extends React.Component {
  render() {
    var cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      boxShadow: "0px 0px 5px #666"
    };
    return (
      <div style={cardStyle}>
        <Square {...this.props}/>
        <Label {...this.props}/>
      </div>
    );
  }

}

export default Card;
