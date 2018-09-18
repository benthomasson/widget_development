import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Letter from './Letter';
import Card from './Card';
import Circle from './Circle';
import CounterParent from './CounterParent'

var theCircle = <Circle bgcolor="#F9C240" />;
var colors=["#393E41", "#E94F37", "#1C89Bf", "#A1D363"];

function showCircle() {
  var ran = Math.floor(Math.random() * colors.length);
  return <Circle bgcolor={colors[ran]}/>;
}

var renderData = [];

for (var i = 0; i < colors.length; i++) {
  var color = colors[i];
  renderData.push(<Circle key={i + color} bgcolor={color} />);
}

class App extends Component {
  render() {
    return (
      <div>
      <h1>Batman</h1>
      <h1>Iron Man</h1>
      <h1>Nicholas Cage</h1>
      <h1>Mega Man</h1>
      <HelloWorld greetTarget="Batman"/>
      <Letter bgcolor="#58B3FF">A</Letter>
      <Letter bgcolor="#FF605F">E</Letter>
      <Letter bgcolor="#FFD52E">I</Letter>
      <Letter bgcolor="#49DD8E">O</Letter>
      <Letter bgcolor="#AE99FF">U</Letter>
      <Card color="#FF6663"/>
      <Card color="#FFA737"/>
      <Circle bgcolor="#F9C240" />
      {theCircle}
      {showCircle()}
      {showCircle()}
      {showCircle()}
      {renderData}
      <CounterParent />
      </div>
    );
  }
}

export default App;
