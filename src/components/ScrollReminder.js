import React from 'react';
import '../App.css';

function ScrollReminder(){
  return (
    <div className="scroll-anim">
      <h5 onClick={() => {this.props.setPageRendered("resume")}}>VVVVVVVVV</h5>
    </div>
  );
}
export default ScrollReminder;
