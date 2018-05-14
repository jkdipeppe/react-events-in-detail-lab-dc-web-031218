// Code DelayedButton Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton extends React.Component {
  clicked = (e) => {
    e.persist();
    setTimeout(() => {this.props.onDelayedClick(e);}, this.props.delay);

  }

  render() {
    return(
      <div>
        <button onClick={this.clicked}>Button</button>
      </div>
    )
  }
}
