import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.scss";
import upArrow from "../../static/icon/up_arrow.svg";
import tempIcon from "../../static/icon/temperature.svg";
import windIcon from "../../static/icon/wind.svg";
import ammoniaIcon from "../../static/icon/fog.svg";
import humidityIcon from "../../static/icon/humidity.svg";
import Container from "react-bootstrap/Container";

const Dashboard = () => {
  const data = [
    {
      result: 35,
      unit: "CELSIUS",
      percentage: "11.5%",
      measure: "TEMPERATURE",
      enviIcon: tempIcon,
      sensor: "X"
    },
    {
      result: 150,
      unit: "KM/HR",
      percentage: "11.5%",
      measure: "WIND",
      enviIcon: windIcon,
      sensor: "Y"
    },
    {
      result: "60%",
      unit: "",
      percentage: "11.5%",
      measure: "AMMONIA",
      enviIcon: ammoniaIcon,
      sensor: "Z"
    },
    {
      result: "77%",
      unit: "",
      percentage: "11.5%",
      measure: "HUMIDITY",
      enviIcon: humidityIcon,
      sensor: "Q"
    }
  ];
  return (
    <div>
      <div className="bg-house mt-4 mb-3 mx-auto d-flex p-2 justify-content-center">
        <div className="text-house text-center align-self-center">HOUSE A</div>
      </div>
      <Container>
        <Row>
          {data.map(data => (
            <Col xs="6" className="d-flex flex-column p-2">
              <div className="bg-card d-flex flex-column">
                <div className="d-flex flex-column text-center flex-grow-1 h-100">
                  <p className="text-record m-0">{data.result}</p>
                  <p className="text-unit m-0">{data.unit}</p>
                  <div className="d-flex justify-content-center">
                    <img src={upArrow} alt="upArrow" />
                    <p class="text-percent m-0">{data.percentage}</p>
                  </div>
                </div>
                <div className="d-flex p-2">
                  <img
                    src={data.enviIcon}
                    alt="tempicon"
                    className="text-image mr-2"
                  />
                  <div className="d-flex flex-column flex-grow-1 w-100">
                    <p className="text-measure m-0">{data.measure}</p>
                    <p className="text-sensor m-0">
                      From {data.sensor} sensors
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
