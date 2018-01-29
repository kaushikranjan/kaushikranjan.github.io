import React from "react"

import Square from  "./Square";
import FlexView from 'react-flexview';
import {Grid, Row, Col, Table, Modal, Button} from 'react-bootstrap';

export default class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      squares: Array(9).fill('-'),
      currentPlayer: 'X',
      isGameOver: false,
      allMovesComplete: false
    };
  }

  areAllMovesComplete(squares) {
    for (let i = 0; i < 9; i++) {
      if (squares[i] === '-')
        return false;
    }
    return true;
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
      isGameOver: false,
      allMovesComplete: false
    });
  }

  modalMessage() {
      if (this.state.isGameOver)
        return <b>Congrats!! {this.state.winner} is the winner. </b>
      else if (this.state.allMovesComplete)
        return <b>Its a tie!!</b>
      else return <b></b>
  }


  handleClick(i) {
      if (!this.state.isGameOver) {
        var squares = this.state.squares.slice();
        squares[i] = this.state.currentPlayer;
        var newPlayer = this.togglePlayer(this.state.currentPlayer)
        var result = this.isCurrentPlayerWinner(squares)
        var winner = this.state.currentPlayer;
        var allMovesComplete = this.areAllMovesComplete(squares);
        this.setState({squares: squares, currentPlayer: newPlayer, isGameOver: result, winner: winner, allMovesComplete: allMovesComplete});
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
            <FlexView column height='30%' width='50%'>
              <FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(0)} </FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(1)} </FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(2)} </FlexView>
              </FlexView>
              <FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(3)} </FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(4)} </FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(5)} </FlexView>
              </FlexView>
              <FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(6)} </FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(7)} </FlexView>
                  <FlexView basis={50} style={{ height: 50 }} hAlignContent='center' vAlignContent='center'> {this.renderSquare(8)} </FlexView>
              </FlexView>
            </FlexView>

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
          		<Modal show={this.state.isGameOver || this.state.allMovesComplete} onHide={this.handleClose}>

          			<Modal.Body>
                  <p style={{'color' : ' #2738a0  ', 'fontSize':'200%', 'verticalAlign': 'middle'}}>{this.modalMessage()}</p>
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
