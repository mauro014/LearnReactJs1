import React from "react";

function Header () {

    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    
    if (hours < 12){
        timeOfDay = "morning";
    }
    else if(hours < 17){
        timeOfDay = "afternoon";
    }
    else{
        timeOfDay = "evening";
    }


    return (
        <header className="navbar"><h1>Good {timeOfDay} </h1></header>
    );
};

export default Header;