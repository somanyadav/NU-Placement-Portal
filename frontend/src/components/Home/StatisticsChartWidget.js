import React from "react";
import { Card } from "react-bootstrap";
// import Chart from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';
import classNames from "classnames";

const StatisticsChartWidget = ({ title, stats, trend, colors }) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span className="text-muted text-uppercase fs-12 fw-bold">
              {title}
            </span>
            <h3 className="mb-0">{stats}</h3>
          </div>
          <div className="align-self-center flex-shrink-0">
            {/* <Chart
                            className="apex-charts"
                            options={options}
                            series={series}
                            type="area"
                            height={45}
                            width={80}
                        /> */}
            <span className={classNames("fw-bold", "fs-13", trend.textClass)}>
              <i className={trend.icon}></i> {trend.value}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatisticsChartWidget;
