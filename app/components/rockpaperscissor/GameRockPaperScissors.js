import React from "react"

import {Bootstrap, Grid, Row, Col, Alert, Table, Jumbotron} from 'react-bootstrap';
import Score from "./Score"
import Board from "./Board"
export default class GameRockPaperScissors extends React.Component {

  constructor() {
    super();
    this.state={
      computerScore: 0,
      userScore: 0
    };
  }

  incrementUserScore() {
    var score = this.state.userScore + 1;
    this.setState({userScore : score})
  }

  incrementComputerScore() {
    var score = this.state.computerScore + 1;
    this.setState({computerScore : score})
  }


  resetScoreBoard() {
    this.setState(
      {
        computerScore: 0,
        userScore: 0
      });
  }

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
                        <b>Rock </b><u>Paper</u><i> Scissors</i>
                      </font>
                    </p>
                  </h1>

                </Jumbotron>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={8}>
              <Board resetScoreBoard={this.resetScoreBoard.bind(this)} incrementUserScore={this.incrementUserScore.bind(this)} incrementComputerScore={this.incrementComputerScore.bind(this)}/>
            </Col>
            <Col md={4}>
              <Score userScore={this.state.userScore} computerScore={this.state.computerScore}/>
            </Col>
          </Row>
        </Grid>


      </div>
    );
  }
}
