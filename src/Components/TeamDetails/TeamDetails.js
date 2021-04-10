import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import TeamInfo from '../TeamInfo/TeamInfo';
import './TeamDetails.css';
const TeamDetails = () => {
    const {teamId} = useParams();
    const [teamDetails, setTeamDetails] = useState({});

    const loadData = () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}` ;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    }
    useEffect(() => {
        loadData();
        return () => {
            setTeamDetails({});
        }
    },[])

    const {strStadiumThumb, strTeamBadge} = teamDetails ;
    return (
        <>
              <section className="team-details-section">
                <div 
                    style={{background:`url(${strStadiumThumb})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'}} 
                    className="team-details-area">

                    <div className="team-overly">
                        <Link to='/'><button>Back to home</button></Link>
                        <div className="team-img">
                            <img src={strTeamBadge} alt=""/>
                        </div> 
                    </div>
                </div>
                <div className="team-information-area">
                    <div className="team-information-area-container">
                        <TeamInfo teamInfo = {teamDetails} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamDetails
