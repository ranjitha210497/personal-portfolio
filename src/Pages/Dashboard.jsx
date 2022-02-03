import React from "react";
import Home from "../Components/Home";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Introduction } from "../Components/Introduction";
import Skills from "../Components/Skills";
import Qualification from "../Components/Qualification";
import Services from "../Components/Services";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShow: false,
        }
    }
    render() {
        return (
            <div className="bg col-10">
               <Header />
               <Home />
               <Footer />
               <Introduction />
               <Skills />
               <Qualification />
               <Services />
            </div>
        )
    }
}

export default Dashboard