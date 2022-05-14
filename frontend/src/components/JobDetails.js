import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Skeleton from "./Skeleton";

export default function JobDetails() {
  const [jdDocs, setJdDocs] = useState([]);
  const [currentDoc, setCurrentDoc] = useState({});

  let history = useHistory();
  const compName = history.location.state?.data;

  // jdDocs.map(function (doc, index) {
  //   console.log(doc.compName);
  //   if (doc.compName === compName) {
  //     setCurrentDoc(doc);
  //   }
  // });

  useEffect(() => {
    fetch("/browsejd")
      .then((response) => response.json())
      .then((data) => setJdDocs(data));
  }, []);

  // console.log("JD Docs ", jdDocs);

  return (
    <>
      <Skeleton />

      <section
        className="section"
        style={{ paddingTop: "6%", paddingBottom: "6%" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8" style={{ zIndex: "0" }}>
              <div className="card job-detail overflow-hidden">
                <div>
                  <div className="job-details-compnay-profile"> </div>
                </div>
                <div className="card-body p-4">
                  <div>
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="mb-1">Product Designer / UI Designer</h5>
                        <ul className="list-inline text-muted mb-0">
                          <li className="list-inline-item text-warning review-rating">
                            {" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="row g-2">
                      <div className="col-lg-3">
                        <div className="border rounded-start p-3">
                          <p className="text-muted mb-0 fs-13">Company </p>
                          <p className="fw-medium mb-0">ABC</p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="border p-3">
                          <p className="text-muted fs-13 mb-0">Location</p>
                          <p className="fw-medium mb-0">Pune</p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="border p-3">
                          <p className="text-muted fs-13 mb-0">
                            {" "}
                            Graduation Year
                          </p>
                          <p className="fw-medium mb-0">2023</p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="border rounded-end p-3">
                          <p className="text-muted fs-13 mb-0">Vacancy</p>
                          <p className="fw-medium mb-0">5</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="mb-3">About Company</h5>
                    <div className="job-detail-desc">
                      <p className="text-muted mb-0">
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent. You will help the team design beautiful
                        interfaces that solve business challenges for our
                        clients. We work with a number of Tier 1 banks on
                        building web-based applications for AML, KYC and
                        Sanctions List management workflows. This role is ideal
                        if you are looking to segue your career into the FinTech
                        or Big Data arenas.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-3">Job Description</h5>
                    <div className="job-detail-desc mt-2">
                      <p className="text-muted">
                        As a Product Designer, you will work within a Product
                        Delivery Team fused with UX, engineering, product and
                        data talent. Have sound knowledge of commercial
                        activities. Build next-generation web applications with
                        a focus on the client side. Work on multiple projects at
                        once, and consistently meet draft deadlines. have
                        already graduated or are currently in any year of study.
                        Revise the work of previous designers to create a
                        unified aesthetic for our brand materials.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-3">Selection Process</h5>
                    <div className="job-detail-desc mt-2">
                      <ul className="job-detail-list list-unstyled mb-0 text-muted">
                        <p>
                          {" "}
                          B.C.A / M.C.A under National University course
                          complete. 3 or more years of professional design
                          experience. have already graduated or are currently in
                          any year of study. Advanced degree or equivalent
                          experience in graphic and web design
                        </p>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-3">Skill & Experience</h5>
                    <div className="job-details-desc">
                      <ul className="job-detail-list list-unstyled mb-0 text-muted">
                        <li>
                          <i className="uil uil-circle"></i> Understanding of
                          key Design Principal
                        </li>
                        <li>
                          <i className="uil uil-circle"></i> Proficiency With
                          HTML, CSS, Bootstrap
                        </li>
                        <li>
                          <i className="uil uil-circle"></i> Wordpress: 1 year
                          (Required)
                        </li>
                        <li>
                          <i className="uil uil-circle"></i> Experience
                          designing and developing responsive design websites
                        </li>
                        <li>
                          <i className="uil uil-circle"></i> web designing: 1
                          year (Preferred)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="side-bar ms-lg-4">
                <div className="card job-overview" style={{ zIndex: "0" }}>
                  <div className="card-body p-4">
                    <h6 className="fs-17">Job Overview</h6>
                    <ul className="list-unstyled mt-4 mb-0">
                      <li>
                        <div className="d-flex mt-4">
                          {" "}
                          <i className="uil uil-user icon bg-soft-primary"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Company Name</h6>
                            <p className="text-muted mb-0">ABC</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex mt-4">
                          {" "}
                          <i className="uil uil-star-half-alt icon bg-soft-primary"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Company URL</h6>
                            <p className="text-muted mb-0"> abc.com</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex mt-4">
                          {" "}
                          <i className="uil uil-location-point icon bg-soft-primary"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Location</h6>
                            <p className="text-muted mb-0"> Pune</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex mt-4">
                          {" "}
                          <i className="uil uil-usd-circle icon bg-soft-primary"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Offered Salary</h6>
                            <p className="text-muted mb-0">$35k - $45k</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex mt-4">
                          {" "}
                          <i className="uil uil-graduation-cap icon bg-soft-primary"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">Qualification</h6>
                            <p className="text-muted mb-0">Bachelor Degree</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex mt-4">
                          {" "}
                          <i className="uil uil-history icon bg-soft-primary"></i>
                          <div className="ms-3">
                            <h6 className="fs-14 mb-2">
                              Company Selection Date
                            </h6>
                            <p className="text-muted mb-0">12 - 12 - 12</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="card company-profile mt-4"
                  style={{ zIndex: "0" }}
                >
                  <div className="card-body p-4">
                    <div className="mt-4">
                      {" "}
                      <a
                        href="www.google.com"
                        className="btn btn-primary btn-hover w-100 rounded"
                      >
                        <i className="mdi mdi-eye"></i> Publish
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
