import React from "react";

export const Introduction = (props) => {
  return (
    <div className="col-10 introduction poppins">
      <div className="d-flex flex-row margin-top-50 justify-content-center">
        <div className="col-3">
          <div className="grid-container margin-top-20">
            <div className="grid">
              <p className="medium fs-24 margin-0">03</p>
              <p className="grey fs-12 margin-0">Years experience</p>
            </div>
            <div className="grid">
              <p className="medium fs-24 margin-0">03</p>
              <p className="grey fs-12 margin-0">Companies worked</p>
            </div>
          </div>
          <a href="/ranjitha-resume-jun-2023.pdf" download>
            <button className="contact-me-button margin-top-20 margin-left-100">
              Download CV
              <img
                src="/images/download-alt.svg"
                className="margin-left-3"
                style={{ width: "15px", stroke: "#fff" }}
                alt="download"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
