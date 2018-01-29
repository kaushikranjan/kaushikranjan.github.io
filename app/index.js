import React from "react";
import ReactDOM from "react-dom";
import Popup from 'react-popup';

//import {Router, Route, IndexRoute, hashHistory} from "react-router";
import hashHistory from "react-router";
import { BrowserRouter, Route, Link, Switch, IndexLinkContainer} from 'react-router-dom'
import GameRockPaperScissors from  "./components/rockpaperscissor/GameRockPaperScissors";
import GameTicTacToe from  "./components/tictactoe/GameTicTacToe";
import Layout from "./pages/Layout"
import Player from "./pages/Player"
import RosterFull from "./pages/RosterFull"
import {LinkContainer} from 'react-router-bootstrap'
import 'react-flexview/lib/flexView.css'

import {Nav, Navbar, NavItem, Bootstrap, Grid, Row, Col, Alert, Table, Jumbotron} from 'react-bootstrap';

const app = document.getElementById('app');

ReactDOM.render(
  <div>


  <BrowserRouter history={hashHistory}>
    <div>
          <Nav bsStyle="pills" >
          <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/tictactoe">
              <NavItem eventKey={2}>Tic Tac Toe</NavItem>
          </LinkContainer>
          <LinkContainer to="/rockpaperscissor">
              <NavItem eventKey={3}>Rock Paper Scissors</NavItem>
          </LinkContainer>
          </Nav>


      <Switch>
        <Route exact path="/" component={Layout}/>
        <Route path="/tictactoe" component={GameTicTacToe}/>
        <Route path="/rockpaperscissor" component={GameRockPaperScissors}/>
      </Switch>

    </div>
  </BrowserRouter>
  </div>
          , app
  );
