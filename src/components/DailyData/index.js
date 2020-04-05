import "./index.scss"

import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FillInChicken } from "./FillInChicken";
import { FillInConsumption } from "./FillInConsumption";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const DailyData = () => {
  const localDate = () => {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    return (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  }

  const [startDate, setStartDate] = useState(localDate);

  return (
    <Container className="containerHeight">
      <div>
        <Form.Group controlId="formDate">
          <Form.Label className="selectDate"> HOUSE n </Form.Label>
          <Form.Control
            type="date"
            defaultValue={startDate.substr(0, 10)}
            onChange={e => setStartDate(e.target.value)}
          />
        </Form.Group>
      </div>

      <div>
        <Tabs defaultActiveKey="dailyData" id="uncontrolled-tab-example">
          <Tab eventKey="dailyData" title="Daily Data">
            <FillInConsumption />
          </Tab>
          <Tab eventKey="chickenData" title="Chicken Data">
            <FillInChicken />
          </Tab>
        </Tabs>
      </div>

      <div className="d-flex justify-content-around">
        <Button variant="backButton" type="button" className="btnBack"> Back </Button>
        <Button variant="submitButton" type="button" className="btnSubmit"> Submit </Button>
        <Button variant="saveButton" type="button" className="btnSave"> Save </Button>
      </div>

      <div className="d-flex justify-content-around">
        <Button variant="viewHistoryButton" type="button" className="btn-history"> VIEW HISTORY </Button>
      </div>
    </Container>
  );

};

export default DailyData;
