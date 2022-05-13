import { useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Skeleton from "./Skeleton";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import "../App.css"

//export default function Dashboard() {
//return <Skeleton />;

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Skeleton />
      <div className="container" style={{ marginTop: "5.5rem" }}>
        <p class="lead d-none d-sm-block">
          <h1 class="mt-3 mb-3 text-secondary">CIC Dashboard</h1>
        </p>

        <div
          class="alert alert-warning fade collapse"
          role="alert"
          id="myAlert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
          </button>
          {/* <strong>Data and Records</strong> Learn more about employee */}
        </div>
        <div class="row mb-3">
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-list fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text">JDs PUBLISHED</h6>
                <h1 class="display-6">134</h1>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-user fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">Students Shortlisted</h6>
                <h1 class="display-6">134</h1>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-pen fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text">IP OFFERED </h6>
                <h1 class="display-6">134</h1>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-share fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">PPO Offered</h6>
                <h1 class="display-6">134</h1>
              </div>
            </div>
          </div>

          {/* <div class="row mb-3">
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card-class" >
              <div
                class="card-body card-style"
                style={{ border:"1px",borderStyle:"solid",borderColor:"black", color:"#81181d" }}
              >
                <div class="rotate">
                  <i class="fa fa-user fa-2x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">Students Selected</h6>
                <h1 class="display-6">134</h1>
              </div>
            </div>
          </div>
          </div> */}
          
          {/* <div class="col-xl-3">
            <div class="card text-white bg-danger h-100">
              <div class="card-class">
                <div class="rotate">
                  <i class="fa fa-list fa-3x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">JDs Published</h6>
                <h1 class="display-6">87</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-info h-100">
              <div class="card-body bg-info">
                <div class="rotate">
                  <i class="fa fa-pen fa-3x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">Offers Accepted</h6>
                <h1 class="display-6">125</h1>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-warning h-100">
              <div class="card-body">
                <div class="rotate">
                  <i class="fa fa-share fa-3x"></i>
                </div>
                <br></br>
                <h6 class="text-uppercase">PPO</h6>
                <h1 class="display-6">36</h1>
              </div>
            </div>
          </div> */}
        </div>

        <hr />
        <h2 class="mt-3 mb-3 text-secondary" align="center">
          Analytics
        </h2>
        <div align="center">
          <div class="row" center>
            <table>
              <tr>
                <td align="center">
                  <PieChart />
                </td>
                <td align="center">
                  <BarChart />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
