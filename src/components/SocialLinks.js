import React from 'react';
import facebookIcon from '../img/facebook-icon.png';
import gmailIcon from '../img/gmail-icon.png';
import twitterIcon from '../img/twitter-icon.png';
import githubIcon from '../img/github-icon.png';
import linkedinIcon from '../img/linkedin-icon.png';
import '../App.css';

function SocialLinks(){
    return (
        <div className="contactme-outer">
            <div className="contactme-inner">
                <a href="https://facebook.com/james1997hughes"><img src={facebookIcon} alt="FaceBook - James Hughes" className='contactme-image'/></a>
                <a href="mailto:james1997hughes@gmail.com"><img src={gmailIcon} alt="Email me: james1997hughes@gmail.com" className='contactme-image'/></a>
                <a href="https://twitter.com/james1997hughes"><img src={twitterIcon} alt="Twitter - James Hughes" className='contactme-image'/></a>
                <a href="https://github.com/james1997hughes"><img src={githubIcon} alt="GitHub - james1997hughes" className='contactme-image'/></a>
                <a href="https://www.linkedin.com/in/james1997hughes/"><img src={linkedinIcon} alt="LinkedIn - James Hughes" className='contactme-image'/></a>
            </div>
        </div>

    );
}
export default SocialLinks;
