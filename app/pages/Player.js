import React from "react"
import PlayerAPI from  "../PlayerAPI"
import { Link } from 'react-router-dom'

export default class RosterFull extends React.Component {

  render() {

    const Player = () => {
      const player = PlayerAPI.get(
        parseInt(this.props.match.params.number, 10)
      )
      if (!player) {
        return <div>Sorry, but the player was not found</div>
      }
      return (
        <div>
          <h1>{player.name} (#{player.number})</h1>
          <h2>Position: {player.position}</h2>
          <Link to='/roster'>Back</Link>
        </div>
      )
    }

    return(
      <Player/>
    );
  }
}
