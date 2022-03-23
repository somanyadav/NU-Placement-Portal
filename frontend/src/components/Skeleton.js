import React from "react";
import Topnav from "./Topnav";

function skeleton() {

  return( 
    <>
      <Topnav/>;
      <div>
        <div className="main-app">
          <div className="sidebar">
            <nav className="main-nav">
              <ul className="main-menu">
                <li className="menu-item active">
                  <a href="#" className="menu-a" target="_blank">
                    <div className="menu-txt-hld">
                      <i className="fas fa-home menu-icon"></i>
                      <span className="menu-txt">Home</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-a" target="_blank">
                    <div className="menu-txt-hld">
                      <i className="fas fa-user-check menu-icon"></i>
                      <span className="menu-txt">Recruiter</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-a" target="_blank">
                    <div className="menu-txt-hld">
                      <i className="fas fa-calendar menu-icon"></i>
                      <span className="menu-txt">Calendar</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-a" target="_blank">
                    <div className="menu-txt-hld">
                      <i className="fas fa-chart-bar menu-icon"></i>
                      <span className="menu-txt">Analytics</span>
                    </div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-a" target="_blank">
                    <div className="menu-txt-hld">
                      <i className="fas fa-users menu-icon"></i>
                      <span className="menu-txt">Students</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default skeleton;
