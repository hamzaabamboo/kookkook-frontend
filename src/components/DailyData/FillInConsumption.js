import "./index.scss"

import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import { FillInVaccine } from "./FillInVaccine";
import Form from "react-bootstrap/Form";

export const FillInConsumption = () => {
    const [foodIn, setFoodIn] = useState();
    const [foodLeft, setFoodLeft] = useState();
    const [waterMeter1, setWaterMeter1] = useState();
    const [waterMeter2, setWaterMeter2] = useState();


    return (<div>
        <Form className="form">
            <div>
                <h4>FOOD CONSUMPTION</h4>
                <Form.Group controlId="formFoodIn">
                    <Form.Label className="foodIn" > Amount of Food Put In </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setFoodIn(e.target.value)}
                        value={foodIn}
                    />
                </Form.Group>

                <Form.Group controlId="formFoodLeft">
                    <Form.Label className="foodLeft" > Amount of Food Left </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setFoodLeft(e.target.value)}
                        value={foodLeft}
                    />
                </Form.Group>
            </div>

            <div>
                <h4>WATER CONSUMPTION</h4>
                <Form.Group controlId="formWaterMeter1">
                    <Form.Label className="waterMeter1" > Water Meter 1 </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setWaterMeter1(e.target.value)}
                        value={waterMeter1}
                    />
                </Form.Group>

                <Form.Group controlId="formWaterMeter2">
                    <Form.Label className="waterMeter2" > Water Meter 2 </Form.Label>
                    <Form.Control
                        type="double"
                        onChange={e => setWaterMeter2(e.target.value)}
                        value={waterMeter2}
                    />
                </Form.Group>
            </div>

            <div>
                <h4>MEDICINE</h4>
                <Form.Group controlId="formMedicine">
                    <Form.Label className="medicineIn" > Amount of Medicine Put In </Form.Label>
                    <div className="d-flex justify-content-between">
                        Add Vaccine
                        <Button variant="addVaccineButton" type="button" className="btnAdd"> + </Button>
                    </div>
                    <div className="d-flex justify-content-between text-center align-self-center">
                        Add Vitamin
                        <Button variant="addVitaminButton" type="button" className="btnAdd"> + </Button>
                    </div>
                    <div> <FillInVaccine /> </div>
                </Form.Group>

            </div>
        </Form>
    </div >
    );
}