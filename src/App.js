import React from "react";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Bibliography from "./Components/Bibliography";
import Footer from "./Components/Footer";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MainContent />
                <Bibliography />
                <Footer />
            </div>
        );
    };
};

export default App