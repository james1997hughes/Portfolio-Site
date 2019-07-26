import React, {useState} from 'react';
import LandingText from './LandingText';
import SocialLinks from './SocialLinks';


function LandingPageTop(){
    return (
        <div className="landing-page-container">
            <LandingText/>
            <SocialLinks/>
        </div>
        

    );
}
 export default LandingPageTop;