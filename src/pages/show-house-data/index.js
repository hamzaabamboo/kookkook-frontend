import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import EditBtn from '../../static/icon/editBtn.svg';
import Form from 'react-bootstrap/Form';
import GetReportBtn from '../../static/icon/getReportBtn.svg';
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';

const ShowHousedata = () => {
    const history = useHistory();
    const getReport = () => {
        history.push('/get-report');
    };
    const manageFlock = () => {
        history.push('/manage-flock');
    };
    const data = [
        {
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        }
    ];
    return (
        <Container className={`${styles.bgLightBlue} vh-100 pt-3`}>
            <img
                className="d-block ml-auto mt-5"
                src={EditBtn}
                alt="export_btn"
                onClick={() => manageFlock()}
            />

            <Form className={styles.textInfo}>
                <div className="d-flex justify-content-start">
                    <label for="chickenInDate" className={styles.infoToShow}> Chicken in Date </label>
                    <div className="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="chickenInDate" value="30/02/2020" />
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    <label for="chickenOutDate" className={styles.infoToShow}> Chicken out Date </label>
                    <div className="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="chickenOutDate" value="01/05/2020" />
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    <label for="numChicken" className={styles.infoToShow}> Number of Chickens </label>
                    <div className="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="numChicken" value="4821" />
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    <label for="chickenGender" className={styles.infoToShow}> Gender </label>
                    <div className="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="chickenGender" value="Male" />
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    <label for="chickenType" className={styles.infoToShow}> Chichen Type </label>
                    <div className="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="chickenType" value="Nugget" />
                    </div>
                </div>
            </Form>


            <img
                src={GetReportBtn}
                alt="export_btn"
                onClick={() => getReport()}
            />
        </Container>
    );
};

export default ShowHousedata;