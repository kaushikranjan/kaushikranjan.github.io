import React from "react";
import {Bootstrap, Grid, Row, Col, Panel, Table} from 'react-bootstrap';


export default class Score extends React.Component {

  constructor() {
      super();
      this.setColor = this.setColor.bind(this)
  }

  setColor(scr1, scr2) {
    if (scr1 > scr2)
      return "#91f091"
    else if (scr1 < scr2)
      return "#e3473a"
    else return "#3f54f0"
  }

  render() {
    console.log(this.props.userScore);
    console.log(this.props.computerScore);
    return (
      <div>

        <Grid>
          <Row className="show-grid">
            <Col md={4}>
              <Panel>
                <Panel.Heading>
                  <p allign="center" style={{'fontSize':'140%', 'display': 'flex','justifyContent': 'center'}}>Score Board</p>
                </Panel.Heading>
                <Panel.Body>
                  <Table style={{'table-layout':'fixed'}}>
                    <thead>
                      <tr>
                        <th>
                          <p allign="center" style={{'fontSize':'140%', 'display': 'flex','justifyContent': 'center'}}>User</p>
                        </th>
                        <th>
                          <p allign="center" style={{'fontSize':'140%', 'display': 'flex','justifyContent': 'center'}}>Computer</p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p allign="center" style={{'fontSize':'350%', 'display': 'flex','justifyContent': 'center'}}>
                            <font color={this.setColor(this.props.userScore, this.props.computerScore)}> {this.props.userScore} </font>
                          </p>
                        </td>
                        <td>
                          <p allign="center" style={{'fontSize':'350%', 'display': 'flex','justifyContent': 'center'}}>
                            <font color={this.setColor(this.props.computerScore, this.props.userScore)}> {this.props.computerScore} </font>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>


      </div>
    );
  }
}
