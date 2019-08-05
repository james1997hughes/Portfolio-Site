import React, { useState, useEffect } from 'react';
import '../App.css';
import LandingPageTop from './LandingPageTop';
import CVPage from './CVPage';

function ScrollHandler(){

  const [opLanding, setOpLanding] = useState(100);
  const [opCV, setOpCV] = useState(0);
  const changeOp = () => {
    const scrolledPer = () => {
      const rawScrolled = ((document.documentElement.scrollTop / document.documentElement.clientHeight) *100);
      if ((rawScrolled % 10) > 4.9){
        return (Math.ceil((((document.documentElement.scrollTop / document.documentElement.clientHeight) *100)+1)/10)*10);
      }else{
        return (Math.floor((((document.documentElement.scrollTop / document.documentElement.clientHeight) *100)+1)/10)*10);
      }
    };
    const moveScreens = () => {
      const amountScrolled = scrolledPer;
      setOpCV(amountScrolled);
      setOpLanding(100 - amountScrolled);
      console.log(`landing opacity: ${opLanding}, cv opacity: ${opCV}`);
    };
   if(document.documentElement.scrollTop > 0){moveScreens()};
 };

  useEffect(() =>{
    window.addEventListener("scroll", changeOp);
  }
);


  return(
    <div className="scroll-container">
      <LandingPageTop id="landing"/>
      <CVPage id="cv"/>
    </div>
  );
}
export default ScrollHandler;
