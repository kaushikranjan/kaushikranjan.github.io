import React from "react"
import {Bootstrap, Grid, Row, Col, Panel, Table, ButtonToolbar, Button, Image} from 'react-bootstrap';

export default class BoardResult extends React.Component {

  constructor() {
      super();
      this.state = {
        display: "none",
        fontColor: "#91f091"
      };
  }

  displayValue() {
    if (this.props.status === "winner")
      return "block"
    else if (this.props.status === "loser")
      return "block"
    else
      return "none"
  }

  displayColor() {
    if (this.props.status === "winner")
      return "#91f091"
    else
      return "#e3473a"
  }

  displayContent() {
    if (this.props.status === "winner")
      return "Won"
    else
      return "Lost"
  }


  render() {
    return (
      <div>
          <Row className="show-grid">
            <Col>
            <div style={{'display' : `${this.displayValue()}`}}>
              <p allign="center" style={{'fontSize':'200%', 'display': 'flex','justifyContent': 'center'}}>
                <font color={this.displayColor()} > {this.displayContent()} </font>
              </p>
            </div>
            </Col>
          </Row>
      </div>
    );
  }
}
