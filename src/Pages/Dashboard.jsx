import React from "react";
import Home from "../Components/Home";
import { Introduction } from "../Components/Introduction";
import Skills from "../Components/Skills";
import Qualification from "../Components/Qualification";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShow: false,
    };
  }
  render() {
    return (
      <div>
        <Home />
        <Introduction />
        <Skills />
        <Qualification />
      </div>
    );
  }
}

export default Dashboard;
