import React from "react";

import Conditional from "./Conditional"

class ConditionalLoading extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                function () {
                    return this.setState({
                        isLoading: false
                    });
                }
            )
        }, 1500
        );
    };

    render() {
        return (
            <div>
                {this.state.isLoading ? <h3>Is loading</h3> : <Conditional />}
            </div>
        );
    };
};

export default ConditionalLoading