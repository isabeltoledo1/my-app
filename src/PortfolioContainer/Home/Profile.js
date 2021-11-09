import React from "react";
import Typical from "react-typical";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/isabel-toledo-3252641b7">
              <i className="fa fa-linkedin-square"></i>
            </a>

            <a href="https://github.com/isabeltoledo1">
              <i className="fa fa-github-square"></i>
            </a>

            <a href="#">
              <i className="fa fa-envelope"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Isabel Toledo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical loop={Infinity} steps={["web developer.", 500]} />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
