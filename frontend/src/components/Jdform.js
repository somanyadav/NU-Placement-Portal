import React from "react";
import Topnav from "./Topnav";

function Jdform() {
  return (
    <>
      <Topnav />
      <div className="container" style={{ marginTop: "5.5rem" }}>
        <form>
          <h2 className="text-center">
            <b style={{ color: "#81181d"}}>Job Description Form</b>
          </h2>
          <br />
          <div className="row jumbotron">
            <div className="col-sm-6 form-group pe-5">
              <label for="name-f">
                <b style={{ color: "#ee4423" }}>Name of Company</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                id="name-f"
                placeholder="ABC"
                required
              />
            </div>
            <div className="col-sm-6 form-group ps-5">
              <label for="name-l">
                <b style={{ color: "#ee4423" }}>Company URL</b>
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                id="name-l"
                placeholder="www.abc.com"
                required
              />
            </div>
            <div className="col-sm-6 py-3 form-group pe-5">
              <label for="email">
                <b style={{ color: "#ee4423" }}>Description of Company and/or Division</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="ABC start up. We are an accredited partner to Automation
Anywhere – one of the leading RPA firms in the world today."
                required
              ></textarea>
            </div>
            <div className="col-sm-6 py-3 form-group ps-5">
              <label for="address-1">
                <b style={{ color: "#ee4423" }}>Work Mode</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Work from Home / Office, due to Covid-19, Work from Home but once situation improves then work from office.
"
                required
              ></textarea>
            </div>
            <div className="col-sm-6 form-group pe-5">
              <label for="address-2">
                <b style={{ color: "#ee4423" }}>Do you give consent / right to use Co. Name & Logo</b>
              </label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio1"
                  name="optradio"
                  value="option1"
                  required
                />{" "}
                Yes
                <label className="form-check-label" for="radio1"></label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="radio2"
                  name="optradio"
                  value="option2"
                />
                No
                <label className="form-check-label" for="radio2"></label>
              </div>
            </div>
            <div className="col-sm-4 form-group pe-5 ps-5">
              <label for="State">
                <b style={{ color: "#ee4423" }}>Internship Role / Job Title</b>
              </label>
              <input
                type="address"
                className="form-control"
                name="State"
                id="State"
                placeholder="Software Intern"
                required
              />
            </div>
            <div className="col-sm-2 form-group">
              <label for="zip">
                <b style={{ color: "#ee4423" }}>Job Location</b>
              </label>
              <input
                type="zip"
                className="form-control"
                name="Zip"
                id="zip"
                placeholder="Pune"
                required
              />
            </div>
            <div className="col-sm-6 py-3 form-group pe-5">
              <label for="ctc">
                <b style={{ color: "#ee4423" }}>Stipend & CTC Offered (Post Internship)</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                placeholder="20K pm stipend during internship. We will also take care of commute and food, for office as required."
                required
              ></textarea>
            </div>
            <div className="col-sm-6 py-3 form-group ps-5">
              <label for="Date">
                <b style={{ color: "#ee4423" }}>Company Selection Date</b>
              </label>
              <input
                type="Date"
                name="dob"
                className="form-control"
                id="Date"
                placeholder=""
                required
              />
            </div>
            <div className="col-sm-12 form-group">
              <label for="selection">
                <b style={{ color: "#ee4423" }}>Selection Process / Mode of Selection</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="1. CV Shortlisting
2. Virtual / Online Written Test
3. Virtual Technical Interview
4. HR / Personal Interview
5. Virtual Assignment"
                required
              ></textarea>
            </div>
            <div className="col-sm-6 py-3 form-group pe-5">
              <label for="Edu">
                <b style={{ color: "#ee4423" }}>Educational Qualification</b>
              </label>
              <select
                id="Qualification"
                className="form-control browser-default custom-select"
              >
                <option value="cse">B.Tech. in Computer Science</option>
                <option value="ece">
                  B.Tech. in Electronics and Communications
                </option>
                <option value="ece">B.Tech. in Biotechnology</option>
                <option value="imba">iMBA</option>
              </select>
            </div>
            <div className="col-sm-4 py-3 form-group pe-5 ps-5">
              <label for="year">
                <b style={{ color: "#ee4423" }}>Year of Graduation</b>
              </label>
              <input
                type="number"
                name="cnf-password"
                className="form-control"
                id="pass2"
                placeholder="2023"
                required
              />
            </div>
            <div className="col-sm-2 py-3 form-group">
              <label for="zip">
                <b style={{ color: "#ee4423" }}>No. of Positions</b>
              </label>
              <input
                type="number"
                className="form-control"
                name="Zip"
                id="zip"
                placeholder=""
                required
              />
            </div>
            <div className="col-sm-6 form-group pe-5">
              <label for="JD">
                <b style={{ color: "#ee4423" }}>Job Descriptions</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder=" The candidate must have excellent spoken English and
presentation skills
 Must know development and coding
 Should be open to travel"
                required
              ></textarea>
            </div>
            <div className="col-sm-6 form-group ps-5">
              <label for="skills">
                <b style={{ color: "#ee4423" }}>Other Important Skills</b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Self driven, motivated, excellent communication & interpersonal skills
Independent player. Presentation skills for client facing trainings.
"
                required
              ></textarea>
            </div>
            <div className="col-sm-12 py-3 form-group">
              <label for="bond">
                <b style={{ color: "#ee4423" }}>
                  Service Bond / Agreement / Contract (Specify details If any)
                </b>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder=""
                required
              ></textarea>
            </div>
            <div className="col-sm-12">
              <label for="chb" className="form-check-label">
                &nbsp;
              </label>
            </div>
            <div className="form-group mb-0 d-flex justify-content-center pb-5">
              
              <button
                className="btn btn-primary float-right"
                style={{ backgroundColor: "#ee4423", borderColor: "#ee4423" }}>
                Submit
              </button>
        
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Jdform;
