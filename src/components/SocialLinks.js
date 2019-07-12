import React from 'react';
import {ReactComponent as facebookIcon} from './img/facebook-icon.svg';
import {ReactComponent as instagramIcon} from './img/instagram-icon.svg';
import {ReactComponent as twitterIcon} from './img/twitter-icon.svg';
import {ReactComponent as githubIcon} from './img/github-icon.svg';
import {ReactComponent as linkedinIcon} from './img/linkedin-icon.svg';

function SocialLinks(){
    return (
        <div>
            <h3>Social media Links:</h3>
            <facebookIcon/>
            <img src={facebookIcon} alt="FaceBook - James Hughes"/>
            <img src={instagramIcon} alt="Instagram - james1997hughes"/>
            <img src={twitterIcon} alt="Twitter - James Hughes"/>
            <img src={githubIcon} alt="GitHub - james1997hughes"/>
            <img src={linkedinIcon} alt="LinkedIn - James Hughes"/>
        </div>
        
    );
}
export default SocialLinks;
 