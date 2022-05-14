import { useRef, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Link, useHistory } from "react-router-dom";
import Skeleton from "./Skeleton";
// import PieChart from "./PieChart";
// import BarChart from "./BarChart";
import { Card, Avatar } from "antd";
import { Row, Col } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import "../App.css"

//export default function Dashboard() {
//return <Skeleton />;

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const { Meta } = Card;

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
                <h6 class="text" style={{ color:"#81181d" }}>JDs PUBLISHED</h6>
                <h1 class="display-6" style={{ color:"#81181d" }}>94</h1>
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
                <h6 class="text-uppercase" style={{ color:"#81181d" }}>Students Shortlisted</h6>
                <h1 class="display-6" style={{ color:"#81181d" }}>134</h1>
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
                <h6 class="text" style={{ color:"#81181d" }}>IP OFFERED </h6>
                <h1 class="display-6" style={{ color:"#81181d" }}>114</h1>
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
                <h6 class="text-uppercase" style={{ color:"#81181d" }}>PPO Offered</h6>
                <h1 class="display-6" style={{ color:"#81181d" }}>66</h1>
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
        <h2 class="mt-3 mb-3 text-secondary" align="left">
          Top recruiters
        </h2>
        {/* <div align="center">
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
        </div> */}
        <div>
        <div>
        <marquee>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="IBM"
                description="Avg. Package 5LPA"
              />
            </Card>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="EY"
                description="Avg. Package 5.2LPA"
              />
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Big Basket"
                description="Avg. Package 8LPA"
              />
            </Card>
          </Col>
          
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Thoucentric"
                description="Avg. Package 6.5LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Genpact"
                description="Avg. Package 8.2LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Morgan Stanley"
                description="Avg. Package 22LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Airtel"
                description="Avg. Package 7.6LPA"
              />
            </Card>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
            <Card style={{ width: 300, zIndex: "0" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="PwC"
                description="Avg. Package 5.6LPA"
              />
            </Card>
          </Col>

          
        </Row></marquee>

        {/* <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="IBM"
          description="54 placed"
        />
      </Card>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="IBM"
          description="54 placed"
        />
      </Card> */}
        </div>
        

      {/* <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card> */}
      </div>
      </div>

      
    </>
  );
};

export default Dashboard;
