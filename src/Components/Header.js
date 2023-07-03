import React from "react";

function Header () {

    const date = new Date(2020,6,31,5);
    const hours = date.getHours();

    let timeOfDay;
    let styles = {
        fontSize: 20
    };
    
    if (hours < 12){
        timeOfDay = "morning";
        styles.color = "#FFBF00";
    }
    else if(hours < 17){
        timeOfDay = "afternoon";
        styles.color = "#FF7722";
    }
    else{
        timeOfDay = "evening";
        styles.color = "#0000aa";
    }

    return (
        <header className="navbar" style={styles}><h1>Good {timeOfDay} </h1></header>
    );
};

export default Header;