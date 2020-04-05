import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import PersonalInfo from './PersonalInfo';
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';

const CreateAccount = () => {
    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [house, setHouse] = useState();
    const houseNum = [
        'House 1',
        'House 2',
        'House 3',
        'House 4',
        'House 5',
        'House 6',
        'House 7',
        'House 8',
        'House 9',
        'House 10',
    ];

    return (
        <Container className={`${styles.bgLightBlue} pt-4 vh-100`}>
            <Form className="px-4 pb-4">
                <Form.Group controlId="formUsername">
                    <Form.Label className={styles.textFormLabel}>
                        Username
                    </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        placeholder="Enter Username"
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label className={styles.textFormLabel}>
                        Password
                    </Form.Label>
                    <Form.Control
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter Password"
                    />
                </Form.Group>

                <Form.Group controlId="formPasswordConfirmation">
                    <Form.Label className={styles.textFormLabel}>
                        Password Confirmation
                    </Form.Label>
                    <Form.Control
                        type="password"
                        onChange={e => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm}
                        placeholder="Enter Password"
                    />
                </Form.Group>

                <Form.Group controlId="form.SelectHouse">
                    <Form.Label className={styles.textFormLabel}>
                        House
                    </Form.Label>
                    <Form.Control
                        as="select"
                        onSelect={e => setHouse(e.target.value)}
                        value={house}
                        custom
                        required
                    >
                        <option disabled selected hidden>
                            Select House
                        </option>
                        {houseNum.map(item => (
                            <option>{item}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Form>

            <div className="px-4">
                <Button
                    variant="createAcct"
                    type="create"
                    className={`w-100 ${styles.btnCreate}`}
                    onClick={() => {
                        history.push(`/personal-info`);
                    }}
                >
                    Next >
                </Button>
            </div>
        </Container>
    );
};
export default CreateAccount;
