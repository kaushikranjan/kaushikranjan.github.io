import React from "react"
import {ButtonToolbar, Button} from 'react-bootstrap';
export default class Square extends React.Component {

  onClickEvent(e) {
    if (this.props.value === '-')
      this.props.changeBoardState(this.props.displayValue);
  }

  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    return (
      <Button bsSize="large" style={{'width' : '100%', 'height' : '100%'}} onClick={this.onClickEvent.bind(this)}>{this.props.value}</Button>
    );


  }
}
