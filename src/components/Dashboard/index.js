import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.scss";

const Dashboard = () => {
  return (
    <Row>
      <Col xs="6" className="bg-card d-flex">
        <p className="text-number">35</p>
      </Col>
      <Col xs="6"></Col>
    </Row>
  );
};

export default Dashboard;
