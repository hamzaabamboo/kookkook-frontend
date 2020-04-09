import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FillInChicken } from "./FillInChicken";
import { FillInConsumption } from "./FillInConsumption";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styles from "./index.module.scss";

const DailyData = () => {
  const localDate = () => {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    return (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  }

  const [startDate, setStartDate] = useState(localDate);

  return (
    <Container className={styles.containerHeight}>
      <div>
        <Form.Group controlId="formDate">
          <Form.Label className={styles.selectDate}> HOUSE n </Form.Label>
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
        <Button variant="viewHistoryBtn" type="button" className={styles.btnViewHistory}> View History </Button>
        <Button variant="sendBtn" type="button" className={styles.btnSend} > Send </Button>
      </div>

    </Container >
  );

};

export default DailyData;
