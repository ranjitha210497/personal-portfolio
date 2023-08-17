import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShow: false,
    };
  }
  render() {
    return (
      <div className="d-flex flex-row justify-content-center">
        <span className="col-1 col-xs-1 d-flex flex-column">
          <a href="https://www.linkedin.com/in/ranjitha-s-1526827b/">
            <img
              className="w-20 margin-20"
              src="/images/linkedin-alt.svg"
              alt="linked-in"
            />
          </a>
          <a href="https://github.com/ranjitha210497/">
            <img
              className="w-20 margin-20"
              src="/images/github-alt.svg"
              alt="github"
            />
          </a>
        </span>

        <span className="col-5 col-xs-5 poppins summary">
          <p className="name margin-bottom-10 margin-top-20">
            Hi, I am Ranjitha Sampangi
          </p>
          <p className="margin-top-10 margin-bottom-10 grey">
            Full Stack Developer
          </p>
          <p className="margin-top-10 margin-bottom-10 grey">
            Enthusiastic Full Stack Developer eager to contribute to team
            success through hard work, attention to detail and organizational
            skills. Motivated to learn, gGrid. and excel in Web development.
          </p>
          Contact me
          <img
            src="/images/message-w.svg"
            className="margin-left-5"
            style={{ width: "15px", stroke: "#fff" }}
            alt="message"
          />{" "}
          8073202038/ranjithasampangi.s.1@gmail.com
        </span>
        <span className="col-5 col-xs-5  profilepic">
          <img width="350" alt="profile" height="450" src="images/perfil.jpg" />
        </span>
      </div>
    );
  }
}

export default Home;
