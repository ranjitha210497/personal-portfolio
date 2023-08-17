import React from "react";

const education = [
  {
    organization: "Dayananda Sagar College of Engineering",
    date: "2015-2019",
  },
];

const work = [
  {
    designation: "Software Developer Intern",
    organization: "Remasis",
    date: "October 2020 - March 2021",
  },
  {
    designation: "Software Developer",
    organization: "Xoxoday",
    date: "March 2021 - February 2022",
  },
  {
    designation: "Software Engineer",
    organization: "Synapsica",
    date: "February 2022 - Present",
  },
];

class Qualification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qualification: "education",
    };
  }

  render() {
    const { qualification } = this.state;
    const iterable = qualification === "education" ? education : work;
    return (
      <div className="col-10 text-align-center introduction poppins margin-bottom-50">
        <p className="medium fs-36 margin-0">Qualification</p>
        <p className="grey">My personal journey</p>
        <div className="d-flex flex-row justify-content-center">
          <div
            className="cursor-pointer d-flex flex-row"
            onClick={() => this.setState({ qualification: "education" })}
          >
            <img
              className="w-20"
              src={`/images/${
                qualification === "education"
                  ? `graduation-cap`
                  : `graduation-cap-b`
              }.svg`}
              alt="education"
              style={{ stroke: "green" }}
            />
            <p
              className={`fs-13 medium margin-left-2 ${
                qualification === "education" ? `primary` : `grey`
              }`}
            >
              Education
            </p>
          </div>
          <div
            className="margin-left-20 cursor-pointer d-flex flex-row"
            onClick={() => this.setState({ qualification: "work" })}
          >
            <img
              className="w-20"
              src={`/images/${
                qualification === "work"
                  ? `briefcase-alt.svg`
                  : `briefcase-alt-b.svg`
              }`}
              alt="work"
              style={{ stroke: "green" }}
            />
            <p
              className={`fs-13 medium margin-left-2 ${
                qualification === "work" ? `primary` : `grey`
              }`}
            >
              Work
            </p>
          </div>
        </div>
        <div className="col-10 d-flex flex-column margin-top-30">
          {iterable.map((edu, i) =>
            (i + 1) % 2 !== 0 ? (
              <div className="d-flex col-5 justify-content-end">
                <div className="col-2 text-align-left">
                  <p className="margin-0 fs-16">{edu.designation}</p>
                  <p className="margin-0 fs-12 grey">{edu.organization}</p>
                  <div className="d-flex flex-row">
                    <img
                      className="w-15"
                      src="/images/schedule.svg"
                      alt="schedule"
                    />
                    <p
                      className="margin-left-5 margin-top-1 margin-bottom-0 fs-10 light-grey"
                      style={{ marginBottom: "0px" }}
                    >
                      {edu.date}
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className="dot"></div>
                  {i < iterable.length - 1 && <div className="line"></div>}
                </div>
              </div>
            ) : (
              <div className="d-flex flex-row" style={{ marginTop: "-1px" }}>
                <div
                  className="d-flex flex-column"
                  style={{ marginLeft: "49.3vw" }}
                >
                  <div className="dot"></div>
                  {i < iterable.length - 1 && <div className="line"></div>}
                </div>
                <div className="col-2 text-align-left margin-left-60">
                  <p className="margin-0 fs-16">{edu.designation}</p>
                  <p className="margin-0 fs-12 grey">{edu.organization}</p>
                  <div className="d-flex flex-row">
                    <img
                      className="w-15"
                      src="/images/schedule.svg"
                      alt="schedule"
                    />
                    <p
                      className="margin-left-5 margin-top-1 margin-bottom-0 fs-10 light-grey"
                      style={{ marginBottom: "0px" }}
                    >
                      {edu.date}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

export default Qualification;
