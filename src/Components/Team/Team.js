import React from 'react'
import './Team.css';
import {FaArrowRight} from 'react-icons/fa';
import {Link } from 'react-router-dom';
const Team = ({team}) => {
    const {strTeam, strSport, strTeamBadge, idTeam} = team ;
    console.log(team);
    return (
        <>
            
                <div className="team-card-area">
                    <img src={strTeamBadge} alt=""/>
                    <h1>{strTeam}</h1>
                    <p>Sport Type: {strSport}</p>
                    <Link to={'/details/'+idTeam}><button>Explore <FaArrowRight className='icon'/></button></Link> 
                </div>  
            
        </>
    )
}

export default Team
