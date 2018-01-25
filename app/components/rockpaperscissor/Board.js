import React from "react"
import {Bootstrap, Grid, Row, Col, Panel, Table, ButtonToolbar, Button, Image} from 'react-bootstrap';
import BoardResult from "./BoardResult"
export default class Board extends React.Component {

  constructor() {
      super();
      this.state = {
        pauseGame: false,
        userImagePath: "",
        computerImagePath: "",
        images : [
          "./img/rockpaperscissors/rock.jpg",
          "./img/rockpaperscissors/paper.jpg",
          "./img/rockpaperscissors/ssc.jpg"
        ],
        winner: "",

      };
  }

  handleOnClick(param, e) {
    if (!this.state.pauseGame)
      this.compute(param)
  }

  isWinner(userChoice, computerChoice) {
    if (userChoice === 1 && computerChoice === 2)
      return "computer";
    else if (userChoice === 2 && computerChoice === 1)
      return "user";
    else if (userChoice === 2 && computerChoice === 3)
      return "computer";
    else if (userChoice === 3 && computerChoice === 2)
      return "user";
    else if (userChoice === 1 && computerChoice === 3)
      return "user";
    else if (userChoice === 3 && computerChoice === 1)
      return "computer";
    else
      return "";
  }

  handleGameComponentProps(winner) {
    if (winner === "computer")
      this.props.incrementComputerScore()
    if (winner === "user")
      this.props.incrementUserScore()
  }

  resetGame() {
    this.resetBoard();
    this.props.resetScoreBoard();
  }

  resetBoard() {
    var pauseGame = false;
    this.setState({
      userImagePath: "",
      computerImagePath: "",
      pauseGame: pauseGame,
      winner: ""
    })
  }

  compute(userChoice) {
    var computerChoice = this.generateItemForComputer()
    var userImg = this.state.images[userChoice]
    var computerImg = this.state.images[computerChoice]
    var pauseGame = !this.state.pauseGame
    var winner = this.isWinner(userChoice+1, computerChoice+1)

    this.setState({
      userImagePath: userImg,
      computerImagePath: computerImg,
      pauseGame: pauseGame,
      winner: winner
    })
    this.handleGameComponentProps(winner)
  }

  getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateItemForComputer() {
    return this.getRandomInt(0, 2)
  }

  render() {
    return (
      <div>
          <Row className="show-grid">
            <Col>
              <Panel>
                <Panel.Body>
                  <Table style={{'tableLayout':'fixed'}}>
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
                          <Row className="show-grid" style={{'display': 'table'}}>
                            <Col md={4} xsOffset={1} style={{'float': 'none', 'display': 'table-cell', 'verticalAlign' : 'top'}}>
                              <div style={{'float': 'none', 'display': 'table-cell','verticalAlign': 'bottom'}}>
                              <ButtonToolbar style={{'padding-bottom': '10px'}}>
                                <Button style={{'width': '100%'}}
                                        bsSize="small" bsStyle="success"
                                        onClick={this.handleOnClick.bind(this, 0)}
                                        >Rock</Button>
                              </ButtonToolbar>
                              <ButtonToolbar style={{'padding-bottom': '10px'}}>
                                <Button style={{'width': '100%'}}
                                        bsSize="small" bsStyle="info"
                                        onClick={this.handleOnClick.bind(this, 1)}
                                        >Paper</Button>
                              </ButtonToolbar>
                              <ButtonToolbar style={{'padding-bottom': '10px'}}>
                                <Button style={{'width': '100%'}}
                                        bsSize="small" bsStyle="warning"
                                        onClick={this.handleOnClick.bind(this, 2)}
                                        >Scissors</Button>
                              </ButtonToolbar>
                              </div>
                            </Col>
                            <Col md={6}>
                              <Image width={150} height={150} src={this.state.userImagePath} rounded/>
                            </Col>
                          </Row>
                        </td>

                        <td>
                          <div >
                          <Image style={{'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto'}} width={150} height={150} src={this.state.computerImagePath} rounded/>
                          </div>
                        </td>
                      </tr>
                      <tr>

                        <td> <BoardResult status={this.state.winner !== "" ? this.state.winner === "user" ? "winner" : "loser" : ""} /> </td>
                        <td> <BoardResult status={this.state.winner !== "" ? this.state.winner === "computer" ? "winner" : "loser" : ""} /> </td>

                      </tr>
                    </tbody>
                  </Table>
                </Panel.Body>
              </Panel>
            </Col>

          </Row>
          <ButtonToolbar>
            <Button bsSize="large" bsStyle="warning"
                    onClick={this.resetBoard.bind(this)}
                    >Next Try!</Button>
            <Button bsSize="large" bsStyle="danger"
                    onClick={this.resetGame.bind(this)}
                    >Reset Game!</Button>
          </ButtonToolbar>
      </div>
    );
  }
}
