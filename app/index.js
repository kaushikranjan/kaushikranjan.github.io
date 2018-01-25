import React from "react";
import ReactDOM from "react-dom";
import Popup from 'react-popup';

//import {Router, Route, IndexRoute, hashHistory} from "react-router";
import { BrowserRouter, Route, IndexRoute, hashHistory } from 'react-router-dom'
//import Game from  "./components/tictactoe/Game";
import Game from  "./components/rockpaperscissor/Game";

const app = document.getElementById('app');

ReactDOM.render(
          <Game />
          , app
  );
