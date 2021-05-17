import React from 'react';
import {Link} from 'react-router-dom';
import Sun from '../assets/animated/01d.svg';
import './About.css';

function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutCard">
                <img className="wIcon" src={Sun} alt="" />
                                    <div><p>This App was built using ReactJS technologies and pure CSS in order to improve my development skills.
                        <br/><br/>
                        You will be able to look for weather information about any city in the world and add them to a watch list.
                        <br/><br/>
                        You can also try the mobile version!
                        <br/><br/>
                        If you want to know more about my works you can access to my social networks linked below.</p></div>
                <div><Link to='/'><p className="link">Back</p></Link></div>
            </div>
        </div>
    );
}

export default About;


