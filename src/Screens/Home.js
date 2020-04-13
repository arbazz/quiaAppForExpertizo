import React from 'react'
import './Style.css'
import {Link} from 'react-router-dom'

const Home = () => {

    return(
        <div className="container valign-wrapper cont ">
          <div className="row center-align">
                <div className="col s1">
              <Link className="waves-effect waves-light btn-large" to="/quiz">Start</Link>
                </div>
          </div>
        </div>
    )
}

export default Home