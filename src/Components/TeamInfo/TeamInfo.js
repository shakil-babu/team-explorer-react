import React from 'react'
import './TeamInfo.css';
import male from '../../Images/male.png';
import female from '../../Images/female.png';
import {FaTwitter, FaFacebookF , FaYoutube, FaInstagram, FaTransgenderAlt} from 'react-icons/fa';
import {CgSearchFound} from 'react-icons/cg';
import {BsFillFlagFill} from 'react-icons/bs';
import {GiSoccerBall} from 'react-icons/gi';
const TeamInfo = ({teamInfo}) => {
    const {strTeam, strSport, intFormedYear, strGender,strCountry, strDescriptionEN, strStadiumDescription,
        strInstagram,strFacebook,strTwitter,strYoutube
    } = teamInfo ;
    return (
        <>
            <section className="info-area">
                <div className="club-info-flex">
                    <div className="club-info">
                        <h1>{strTeam}</h1>
                       <div className="icon-flex">
                       <CgSearchFound className='icon' /> <h4>Founded: {intFormedYear}</h4>
                       </div>
                       <div className="icon-flex">
                       <BsFillFlagFill className='icon' /><h4>Country: {strCountry}</h4>
                       </div>
                       <div className="icon-flex">
                       <GiSoccerBall className='icon' /><h4>Sport Type: {strSport}</h4>
                       </div>
                       <div className="icon-flex">
                       <FaTransgenderAlt className='icon' /><h4>Gender: {strGender}</h4>
                       </div>
                    </div>
                    <img src={strGender === 'Male'? male : female} alt=""/>
                </div>
                <p className='description'>{strDescriptionEN}</p>
                <p className='description'>{strStadiumDescription}</p>

                <div className="social-icons">
                    <div className="twitter"><a href={`https://${strTwitter}`} target='_blank' > <FaTwitter className='s-icon'/></a></div>
                    <div className="facebook"><a href={`https://${strFacebook}`} target='_blank' > <FaFacebookF className='s-icon'/></a></div>
                    <div className="youtube"><a href={`https://${strYoutube}`} target='_blank' > <FaYoutube className='s-icon'/></a></div>
                    <div className="instragram"><a href={`https://${strInstagram}`} target='_blank' > <FaInstagram className='s-icon'/></a></div>
                </div>
            </section>
        </>
    )
}

export default TeamInfo
