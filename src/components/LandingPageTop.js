import React, {useState} from 'react';
import LandingText from './LandingText';
import SocialLinks from './SocialLinks';
import ScrollReminder from './ScrollReminder.js';


function LandingPageTop(){
    return (
        <div className="landing-page-container">
            <LandingText/>
            <SocialLinks/>
            <ScrollReminder/>
        </div>


    );
}
 export default LandingPageTop;
