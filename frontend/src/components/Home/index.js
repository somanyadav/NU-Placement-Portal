import React, { useState } from "react";
import { Row, Col, Dropdown, ButtonGroup } from "react-bootstrap";

import Statistics from "./Statistics";

const EcommerceDashboard = () => {
  return (
    <>
      <div style={{ paddingTop: "1rem" }}></div>
      <Statistics />
    </>
  );
};

export default EcommerceDashboard;
