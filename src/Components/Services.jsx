import React from "react";

const services = [
  {
    name: "Ui/Ux Designer",
    tag: "ui_ux",
    description: [
      "I develop the user interface",
      "Web Page Development",
      "I create ux element interactions",
      "I position your company brand",
    ],
  },
  {
    name: "Frontend Developer",
    tag: "frontend",
    description: [
      "I create web pages",
      "Web Page Development",
      "I create ux element interactions",
      "I position your company brand",
    ],
  },
  {
    name: "Backend Developer",
    tag: "backend",
    description: [
      "I develop api's",
      "fetching data",
      "Integrating database",
      "Knows Node rest and graphql",
    ],
  },
];

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      service: "",
      modal: false,
    };
  }

  render() {
    const { service, modal } = this.state;
    return (
      <div className="col-10 text-align-center introduction poppins">
        <p className="medium fs-36 margin-0">Services</p>
        <p className="grey">What i offer</p>
        {modal && (
          <div class="backdrop">
            <div className="modal">
              {services.map((tech, i) =>
                tech.tag === service ? (
                  <>
                    <div
                      className="d-flex flex-row margin-bottom-20"
                      style={{ justifyContent: "space-between" }}
                    >
                      <p className="fs-18 medium margin-0">
                        {services[i].name}
                      </p>
                      <img
                        className="w-20 cursor-pointer"
                        src="/images/times.svg"
                        alt="close"
                        onClick={() => this.setState({ modal: false })}
                      />
                    </div>
                    {services[i].description.map((desc) => (
                      <div className="d-flex flex-row">
                        <img
                          className="w-15 margin-right-5"
                          src="/images/check-circle.svg"
                          alt="close"
                        />
                        <p className="fs-12 grey margin-top-10 margin-bottom-10">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </>
                ) : null
              )}
            </div>
          </div>
        )}
        <div className="d-flex flex-row justify-content-center">
          <div className="card text-left">
            <img
              className="w-30 margin-top-60"
              src="/images/puzzle-piece.svg"
              alt="puzzle"
            />
            <p className="fs-20 medium margin-top-10 margin-bottom-0">Ui/Ux</p>
            <p className="fs-20 medium margin-bottom-0 margin-top-0">
              Designer
            </p>
            <div
              className="d-flex flex-row view-more cursor-pointer"
              onClick={() => this.setState({ service: "ui_ux", modal: true })}
            >
              <p className="fs-13 primary medium ">View more</p>
              <img
                className="w-20 margin-left-10 arrow-right"
                src="/images/arrow-right.svg"
                alt="arrow-right"
              />
            </div>
          </div>
          <div className="card margin-left-20">
            <img
              className="w-30 margin-top-60"
              src="/images/puzzle-piece.svg"
              alt="puzzle"
            />
            <p className="fs-20 medium margin-top-10 margin-bottom-0">
              Frontend Developer
            </p>
            <div
              className="d-flex flex-row view-more"
              onClick={() =>
                this.setState({ service: "frontend", modal: true })
              }
            >
              <p className="fs-13 primary medium cursor-pointer">View more</p>
              <img
                className="w-20 margin-left-10"
                src="/images/arrow-right.svg"
                alt="arrow-right"
              />
            </div>
          </div>
          <div className="card margin-left-20">
            <img
              className="w-30 margin-top-60"
              src="/images/puzzle-piece.svg"
              alt="puzzle"
            />
            <p className="fs-20 medium margin-top-10 margin-bottom-0">
              Backend Developer
            </p>
            <div className="d-flex flex-row view-more">
              <p
                className="fs-13 primary medium cursor-pointer"
                onClick={() =>
                  this.setState({ service: "backend", modal: true })
                }
              >
                View more
              </p>
              <img
                className="w-20 margin-left-10"
                src="/images/arrow-right.svg"
                alt="arrow-right"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
