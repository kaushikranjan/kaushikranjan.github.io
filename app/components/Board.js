import React from "react"

import Square from  "./Square";
import {Grid, Row, Col, Table, Modal, Button} from 'react-bootstrap';

export default class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill('-'),
      currentPlayer: 'X',
      isGameOver: false
    };
  }

  isCurrentPlayerWinner(squares) {
    const winRule = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]
    for (let i = 0; i < winRule.length; i++) {
      const [a, b, c] = winRule[i];
      if (squares[a] === squares[c] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] != '-') {
        return true;
      }
    }
    return false;
  }

  togglePlayer(player) {
    if (player === 'X')
      return 'O'
    else return 'X'
  }


  resetGame(e) {
    this.setState({
      squares: Array(9).fill('-'),
      currentPlayer: 'X',
      isGameOver: false
    });
  }

  handleClick(i) {
      if (!this.state.isGameOver) {
        var squares = this.state.squares.slice();
        squares[i] = this.state.currentPlayer;
        var newPlayer = this.togglePlayer(this.state.currentPlayer)
        var result = this.isCurrentPlayerWinner(squares)
        var winner = this.state.currentPlayer;
        this.setState({squares: squares, currentPlayer: newPlayer, isGameOver: result, winner: winner});
      }
  }

  getStatus() {
    if (this.state.isGameOver)
      return '';
    else
      return 'Current Player: ' + this.state.currentPlayer;
  }


  renderSquare(i) {
   return <Square displayValue={i} value={this.state.squares[i]} changeBoardState={this.handleClick.bind(this)} />;
  }


  render() {
    var status = this.getStatus()
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <Table condensed bordered>
              <tbody>
                <tr>
                  <td style={{'width':'10%'}}>{this.renderSquare(0)}</td>
                  <td style={{'width':'10%'}}>{this.renderSquare(1)}</td>
                  <td style={{'width':'10%'}}>{this.renderSquare(2)}</td>
                </tr>
                <tr>
                  <td style={{'width':'10%'}}>{this.renderSquare(3)}</td>
                  <td style={{'width':'10%'}}>{this.renderSquare(4)}</td>
                  <td style={{'width':'10%'}}>{this.renderSquare(5)}</td>
                </tr>
                <tr>
                  <td style={{'width':'10%'}}>{this.renderSquare(6)}</td>
                  <td style={{'width':'10%'}}>{this.renderSquare(7)}</td>
                  <td style={{'width':'10%'}}>{this.renderSquare(8)}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={4} md={3} >
              <div  style={{'display': 'table-cell', 'verticalAlign': 'middle'}}>
              <p align="center" style={{'fontSize':'160%', 'verticalAlign': 'middle'}}>
                {status}
              </p>
              </div>
          </Col>
        </Row>
      </Grid>

            <div className="static-modal">
          		<Modal show={this.state.isGameOver} onHide={this.handleClose}>

          			<Modal.Body>
                  <p style={{'color' : ' #2738a0  ', 'fontSize':'200%', 'verticalAlign': 'middle'}}><b>Congrats!! {this.state.winner} is the winner.</b></p>
                </Modal.Body>

          			<Modal.Footer>
          				<Button onClick={this.resetGame.bind(this)} bsStyle="primary">Reset</Button>
          			</Modal.Footer>
          		</Modal>
          	</div>
      </div>
    );
  }
}
