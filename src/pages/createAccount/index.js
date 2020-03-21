import "./index.scss";

import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";

const CreateAccount = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [house, setHouse] = useState('Select House');
    const houseNum = ['House 1', 'House 2', 'House 3', 'House 4', 'House 5', 'House 6', 'House 7', 'House 8', 'House 9', 'House 10'];


    return (
        <Container>
            <Form.Group controlId="formUsername">
                <Form.Label className="username"> USERNAME </Form.Label>
                <Form.Control
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label> PASSWORD </Form.Label>
                <Form.Control
                    type="text"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
            </Form.Group>

            <Form.Group controlId="dropdownHouse">
                <Form.Label> Responsible House </Form.Label>
                <DropdownButton id="dropdown-button" title={house}>
                    {houseNum.map((houseNum, index) => (
                        <Dropdown.Item onSelect={() => setHouse(houseNum)}>{houseNum}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </Form.Group>

            <div className="d-flex justify-content-around">
                <Button variant="createAcct" type="create" className="btn-create"> Create Account </Button>
            </div>

        </Container >
    );
};
export default CreateAccount;