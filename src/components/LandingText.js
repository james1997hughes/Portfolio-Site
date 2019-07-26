import React, {useState, useEffect} from 'react';

function LandingText(){

    const strArr = ["Hi.",
                    "I'm James.",
                    "Software Development is my forté.",
                    "Scroll down to see my CV or contact me below."];
    const [str1, setstr1] = useState(strArr[0]);
    const [str2, setstr2] = useState(strArr[1]);
    const [str3, setstr3] = useState(strArr[2]);
    const [str4, setstr4] = useState(strArr[3]);

    
    /*
    function loadText(strToChange, strToLoad){

            while(strToChange.length !== strToLoad.length){
                setTimeout(() => {
                    console.log("Added a letter");
                    switch(strToChange){
                        case 'str1':
                            setstr1(strToLoad.slice(0, (strToChange.length += 1)));
                        break;
                        case 'str2':
                            setstr2(strToLoad.slice(0, (strToChange.length += 1)));
                        break;
                        case 'str3':
                            setstr3(strToLoad.slice(0, (strToChange.length += 1)));
                        break;
                        case 'str4':
                            setstr4(strToLoad.slice(0, (strToChange.length += 1)));
                        break;
                        default:
                            console.log('fatal typewriter error');
                        break;

                    }}, 100);
                //loads the str including the next character
            }
        
    }
    function loopLoader(){
        for (var i=0; i < strArr.length; i++){
            switch(i){
                case 0:
                    loadText(str1, strArr[0]);
                break;
                case 1:
                    loadText(str2, strArr[1]);
                break;
                case 2:
                    loadText(str3, strArr[2]);
                break;
                case 3:
                    loadText(str4, strArr[3]);
                break;
                default:
                console.log('fatal loop error');
            }
        }
    }
    useEffect(loopLoader);*/
    /*var i = 0;
    function loadmytext(){
        if(i < strArr[2].length){
            var temp = str3;
            var builder = temp + strArr[2].charAt(i);
            setstr3(builder);
            console.log("added");
            i++;
            setTimeout(loadmytext, 100);
        }
    }*/

    return (
        <div className="landing-text-container">
            <h1 className="landing-text-loadable">{str1}</h1>
            <h1 className="landing-text-loadable">{str2}</h1>
            <h1 className="landing-text-loadable">{str3}</h1>
            <h1 className="landing-text-loadable">{str4}</h1>
        </div>
        
    );
}
 export default LandingText;