import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import { FillInMedicine } from './FillInMedicine';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import addMedicineBtn from '../../components/DailyData/addCircleBtn.svg';
import deleteMedicineBtn from '../../components/DailyData/trashBtn.svg';
import styles from './index.module.scss';

const vaccineType = ['NDIB', 'IBD'];
const vitaminType = [
    'Cal-D-Phos',
    'Lovit Phos',
    'Super San',
    'A V Leaf',
    'Lava San',
    'T Mix',
    'Pro 7 Plus',
    'Far C 12',
    'Tilo San',
];

export const FillInConsumption = () => {
    const [foodIn, setFoodIn] = useState();
    const [foodLeft, setFoodLeft] = useState();
    const [waterMeter1, setWaterMeter1] = useState();
    const [waterMeter2, setWaterMeter2] = useState();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setChosenMedicine(old => {
            const cVac = Object.keys(vaccine)
                .filter(each => vaccine[each])
                .reduce((prev, curr) => {
                    prev[curr] = old[curr] ? old[curr] : 0;
                    return prev;
                }, {});
            const cVit = Object.keys(vitamin)
                .filter(each => vitamin[each])
                .reduce((prev, curr) => {
                    prev[curr] = old[curr] ? old[curr] : 0;
                    return prev;
                }, {});
            return { ...cVac, ...cVit };
        });
    };

    const [vaccine, setVaccine] = useState(
        vaccineType.reduce((prev, curr) => {
            prev[curr] = false;
            return prev;
        }, {}),
    );
    const [vitamin, setVitamin] = useState(
        vitaminType.reduce((prev, curr) => {
            prev[curr] = false;
            return prev;
        }, {}),
    );
    const [chosenMedicine, setChosenMedicine] = useState({});
    const handleConcentrationChange = (value, type) => {
        setChosenMedicine(old => {
            return {
                ...old,
                [type]: value,
            };
        });
    };

    return (
        <div>
            <Form className="form">
                <div>
                    <h4>FOOD CONSUMPTION</h4>
                    <Form.Group controlId="formFoodIn">
                        <Form.Label className={styles.foodIn}>
                            {' '}
                            Amount of Food Put In{' '}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e => setFoodIn(e.target.value)}
                            value={foodIn}
                        />
                    </Form.Group>

                    <Form.Group controlId="formFoodLeft">
                        <Form.Label className={styles.foodLeft}>
                            {' '}
                            Amount of Food Left{' '}
                        </Form.Label>
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
                        <Form.Label className={styles.waterMeter1}>
                            {' '}
                            Water Meter 1{' '}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e => setWaterMeter1(e.target.value)}
                            value={waterMeter1}
                        />
                    </Form.Group>

                    <Form.Group controlId="formWaterMeter2">
                        <Form.Label className={styles.waterMeter2}>
                            {' '}
                            Water Meter 2{' '}
                        </Form.Label>
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
                        <Form.Label className={styles.medicineIn}>
                            {' '}
                            Amount of Medicine Put In{' '}
                        </Form.Label>
                        <div className="d-flex justify-content-between">
                            Add Medicine
                            <img src={addMedicineBtn} onClick={handleShow} />
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add Medicine</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <FillInMedicine
                                        vaccine={vaccine}
                                        setVaccine={setVaccine}
                                        vitamin={vitamin}
                                        setVitamin={setVitamin}
                                    />
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        variant="addButton"
                                        type="button"
                                        className={styles.btnSubmit}
                                        onClick={handleClose}
                                    >
                                        Add
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {Object.keys(chosenMedicine).map(eachMedType => {
                                return (
                                    <form
                                        className="form-inline"
                                        key={eachMedType}
                                    >
                                        <div>
                                            <label
                                                for="Name"
                                                className={styles.fromCheckbox}
                                            ></label>
                                            <input
                                                type="text"
                                                readonly
                                                className="form-control-plaintext"
                                                value={eachMedType}
                                            />
                                        </div>
                                        <div className="form-group mx-sm-3 mb-2">
                                            <label
                                                for="inputAmountMedicine"
                                                className="sr-only"
                                            >
                                                Amount in ml
                                            </label>
                                            <input
                                                key={eachMedType}
                                                type="number"
                                                className="form-control"
                                                placeholder="Amount in ml"
                                                onChange={e => {
                                                    handleConcentrationChange(
                                                        e.target.value,
                                                        eachMedType,
                                                    );
                                                }}
                                            />
                                        </div>
                                        <img
                                            src={deleteMedicineBtn}
                                            onClick={() => true}
                                        />
                                    </form>
                                );
                            })}
                        </div>
                    </Form.Group>
                </div>
            </Form>
        </div>
    );
};
