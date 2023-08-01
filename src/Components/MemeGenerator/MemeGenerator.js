import React from "react";

class MemeGenerator extends React.Component {
    constructor(){
        super();
        this.state = {
            topText :"",
            bottomtext : "",
            randomImage : "https://i.imgflip.com/1bij.jpg",
            allmemesImg: []
        };
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then (response => {
            const {memes} = response.data;
            console.log(memes[0]);
            this.setState({ allmemesImg: memes } )
        })
    }

    render(){
        return <h1>Meme Generator</h1>;
    }
}

export default MemeGenerator;