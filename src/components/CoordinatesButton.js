// Code CoordinatesButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {
  clicked = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])

  }

  render() {
    return(
      <div>
        <button onClick={this.clicked}>Button</button>
      </div>
    )
  }
}
