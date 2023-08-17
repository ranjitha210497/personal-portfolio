import React from "react";

/**
 * @author
 * @function Skills
 **/

const frontend_developer_courses = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
];

const backend_skills = ["MySQL", "GraphQL", "Rest Api", "Node js", "MongoDB"];
const other_skills = ["C", "C++", "Git", "VsCode", "Jira"];

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontend_developer: false,
      designer: false,
    };
  }

  render() {
    const { frontend_developer, designer } = this.state;
    return (
      <div className="col-9 justify-content-center align-items-center d-flex flex-column introduction poppins">
        <p className="medium fs-36">Skills</p>

        <div className="col-8 frontend-developer justify-content-center d-flex">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <img
                className="w-25"
                src="/images/brackets-curly.svg"
                alt="curly-brackets"
              />
              <div className="d-flex flex-column margin-left-10 margin-right-10 margin-top-20">
                <p className="medium fs-20 margin-0 ">Frontend Skills</p>
                <p className="fs-12 light-periwinkle margin-top-5 text-align-left">
                  More than 3 years
                </p>
              </div>
              <img
                className="w-25 margin-left-70 cursor-pointer"
                src={`/images/${
                  this.state.frontend_developer ? `angle-up` : `angle-down`
                }.svg`}
                alt="arrow-down"
                onClick={() =>
                  this.setState({ frontend_developer: !frontend_developer })
                }
              />
            </div>
            {frontend_developer &&
              frontend_developer_courses.map((course, i) => (
                <div className="d-flex flex-row col-2 fs-13">
                  <p className="text-align-left medium col-1">{course}</p>
                </div>
              ))}
          </div>

          <div className="d-flex flex-column margin-left-100 ">
            <div className="d-flex flex-row">
              <img
                className="w-25 margin-left-20"
                src="/images/pathfinder.svg"
                alt="curly-brackets"
              />
              <div className="d-flex flex-column margin-left-10 margin-right-10 margin-top-20">
                <p className="medium fs-20 margin-0 ">Backend Skills</p>
                <p className="fs-12 light-periwinkle margin-top-5 margin-left-20">
                  More than 1 year
                </p>
              </div>
              <img
                className="w-25 margin-left-170 cursor-pointer"
                src={`/images/${
                  this.state.designer ? `angle-up` : `angle-down`
                }.svg`}
                alt="arrow-down"
                onClick={() => this.setState({ designer: !designer })}
              />
            </div>
            {designer &&
              backend_skills.map((course, i) => (
                <div className="d-flex flex-row col-2 fs-13">
                  <p className="text-align-left medium col-1">{course}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="d-flex flex-row margin-top-20">
          <div className="col-8 frontend-developer d-flex flex-row justify-content-center">
            <img
              className="w-25"
              src="/images/server-network.svg"
              alt="curly-brackets"
            />
            <div className="d-flex flex-column">
              <div className="d-flex flex-row">
                <div className="d-flex flex-column margin-left-10 margin-right-10 margin-top-20">
                  <p className="medium fs-20 margin-0 ">Other Skills</p>
                  <p className="fs-12 light-periwinkle margin-top-5 text-align-left">
                    More than 3 years
                  </p>
                </div>
                <img
                  className="w-25 margin-left-70 cursor-pointer"
                  src={`/images/${
                    this.state.frontend_developer ? `angle-up` : `angle-down`
                  }.svg`}
                  alt="arrow-down"
                  onClick={() =>
                    this.setState({ frontend_developer: !frontend_developer })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {(frontend_developer || designer) && (
          <div className="d-flex flex-row bg">
            <div className="d-flex flex-column col-2">
              {frontend_developer &&
                other_skills.map((course, i) => (
                  <div className="d-flex flex-row col-2 fs-13">
                    <p className="text-align-left medium col-1">{course}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Skills;
