import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import ExportBtn from '../../static/icon/exportBtn.svg';
import Form from 'react-bootstrap/Form';
import styles from './index.module.scss';

const GetReport = () => {
    const reportType = [
        'Environmental data report',
        'Food consumption report',
        'Water consumption report',
        'Medicine consumption report',
        'Dead chicken report',
        'Overall report',];
    const [report, setReport] = useState(
        reportType.reduce((prev, curr) => {
            prev[curr] = false;
            return prev;
        }, {}),
    );
    const [email, setEmail] = useState();

    return (
        <div>
            <Container className={`${styles.bgLightBlue} pt-4 vh-100`}>

                <div>
                    <h6>Report</h6>
                    {Object.keys(report).map((eachReportType, index) => {
                        return (
                            <div key={index} className="form-check">
                                <input
                                    className="form-check-input-report"
                                    type="checkbox"
                                    checked={report[eachReportType]}
                                    onClick={() =>
                                        setReport(old => {
                                            return {
                                                ...old,
                                                [eachReportType]: !report[
                                                    eachReportType
                                                ],
                                            };
                                        })
                                    }
                                />
                                <label className="form-check-label" for="defaultCheck1">
                                    {eachReportType}
                                </label>
                            </div>
                        );
                    })}
                </div>

                <Form.Group controlId="formGetReport">
                    <Form.Label className={styles.email}> Send to </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder="youremail@gmail.com"
                    />
                </Form.Group>
                <img
                    className="d-flex justify-content-around"
                    src={ExportBtn}
                    alt="export_btn"
                />
            </Container>
        </div>
    );
};
export default GetReport;
