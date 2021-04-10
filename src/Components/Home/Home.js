import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Team from '../Team/Team';
import './Home.css';
const Home = () => {
    const [teams , setTeams] = useState([]);
    const loadDAta = () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }
    useEffect(() => {
        loadDAta();
    }, []
    )
    return (
        <>
            <section className="home-area">
                <Header/>

                <div className="teams-showcase-area">
                    <div className="team-showcase-container">
                        {
                            teams.map((team) => <Team team = {team} />)
                        }
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Home
