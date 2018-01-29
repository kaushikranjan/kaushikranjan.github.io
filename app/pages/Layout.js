import React from "react"
import {Bootstrap, Grid, Row, Col, Alert, Table, Jumbotron, Button} from 'react-bootstrap';
import FlexView from 'react-flexview';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col>
              <Jumbotron style={{backgroundColor: '#fbfbfb'}}>
                <h1>
                  <p allign="center" style={{'fontSize':'140%', 'display': 'flex','justifyContent': 'center'}}>
                    <font color="#060101">
                      Board Games
                    </font>
                  </p>
                </h1>

              </Jumbotron>
          </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
