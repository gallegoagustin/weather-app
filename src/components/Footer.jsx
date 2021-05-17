import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div id="gContainer">
            <div className='footerContainer'>
                <p>Agustín Gallego -</p> 
                <a target="on_blank" href="https://www.linkedin.com/in/agustin-gallego-741653200/"><p className='link'>LinkedIn</p></a>
                <p>|</p>
                <a target="on_blank" href="https://github.com/gallegoagustin"><p className='link'>GitHub</p></a>
            </div>
        </div>
    );
}

export default Footer;