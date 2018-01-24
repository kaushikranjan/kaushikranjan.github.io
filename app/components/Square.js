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

      <div style={{ 'height': '100%', 'width': '100%', 'top': 0, 'left': 0}}>
      <ButtonToolbar style={{'display': 'flex','justify-content': 'center'}}>
		     <Button bsSize="large" style={{'display': 'table-cell'}} onClick={this.onClickEvent.bind(this)}>{this.props.value}</Button>
      </ButtonToolbar>
      </div>
    );


  }
}
