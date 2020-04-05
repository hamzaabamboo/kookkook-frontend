import "./index.scss"

import React, { useState } from "react";

import Form from "react-bootstrap/Form";

export const FillInChicken = () => {
    const [deadChicken, setDeadChicken] = useState();
    const [zLegChicken, setZLegChicken] = useState();
    const [dwarfChicken, setDwarfChicken] = useState();
    const [sickChicken, setSickChicken] = useState();

    return (
        <div>
            <h4>UNQUALIFIED CHICKEN</h4>

            <Form.Group controlId="formDeadChicken">
                <Form.Label className="numDeadChicken" > Number of Dead Chickens </Form.Label>
                <Form.Control
                    type="text"
                    onChange={e => setDeadChicken(e.target.value)}
                    value={deadChicken}
                />
            </Form.Group>

            <Form.Group controlId="formZLegChicken">
                <Form.Label className="numZLegChicken" > Number of Z-Leg Chickens </Form.Label>
                <Form.Control
                    type="text"
                    onChange={e => setZLegChicken(e.target.value)}
                    value={zLegChicken}
                />
            </Form.Group>

            <Form.Group controlId="formDwarfChicken">
                <Form.Label className="numDwarfChicken" > Number of Dwarf Chickens </Form.Label>
                <Form.Control
                    type="text"
                    onChange={e => setDwarfChicken(e.target.value)}
                    value={dwarfChicken}
                />
            </Form.Group>

            <Form.Group controlId="formSickChicken">
                <Form.Label className="numSickChicken" > Number of Sick Chickens </Form.Label>
                <Form.Control
                    type="text"
                    onChange={e => setSickChicken(e.target.value)}
                    value={sickChicken}
                />
            </Form.Group>
        </div>
    );

}