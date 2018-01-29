import React from "react"
import PlayerAPI from  "../PlayerAPI"
import { Link } from 'react-router-dom'
export default class RosterFull extends React.Component {



  render() {
    const FullRoster = () => (
      <div>
        <ul>
          {
            PlayerAPI.all().map(p => (
              <li key={p.number}>
                <Link to={`/roster/${p.number}`}>{p.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )

    return (
      <FullRoster/>
    );
  }
}
