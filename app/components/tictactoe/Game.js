import React from "react"

import Board from  "./Board";
import {Bootstrap, Grid, Row, Col, Alert, Table, Jumbotron} from 'react-bootstrap';

export default class Game extends React.Component {

  render() {
    return (
      <div>

        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
                <Jumbotron style={{backgroundColor: '#fbfbfb'}}>
                  <h1>
                    <p allign="center" style={{'fontSize':'160%'}}>
                      <font color="#060101">
                        <b>Tic </b><u>Tac</u><i> Toe</i>
                      </font>
                    </p>
                  </h1>

                </Jumbotron>
            </Col>
          </Row>
          <Row className="show-grid">
                <Board />
          </Row>
        </Grid>


      </div>
    );
  }
}
