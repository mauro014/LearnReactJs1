import React from "react";

class FetchingSW extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(data => {
                this.setState (
                    {
                        isLoading: false,
                        character: data
                    }
                )
            })
    }

    render() {
        const text = this.state.isLoading ? "Is loading ...." : this.state.character.name;
        return (
            <div>
                <h1>Fetching Stars Wars Data</h1>
                <p>{text}</p>
            </div>
        );
    };
};

export default FetchingSW;