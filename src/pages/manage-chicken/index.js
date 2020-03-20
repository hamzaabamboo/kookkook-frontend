import React, { useState } from 'react';
import './index.scss';
import Container from 'react-bootstrap/Container';
import DeleteTab from '../../static/icon/delete.svg';
import BarnIcon from '../../static/icon/barn_manage.svg';
import ChickenIcon from '../../static/icon/chicken-manage.svg';
import NextArrow from '../../static/icon/next_manage.svg';
import AddBtn from '../../static/icon/addBtn.svg';
import DeleteBtn from '../../static/icon/deleteBtn.svg';
import { useHistory } from 'react-router-dom';

const ManageChicken = () => {
    const history = useHistory();
    const [deleteTab, setDeleteTab] = useState(false);

    const manageHouse = () => {
        history.push('/manage-flock');
    };
    const showDeleteBtn = () => {
        return <img src={DeleteBtn} alt="delete_btn" />;
    };

    const data = [
        {
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
        {
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
        {
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
        {
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
    ];
    return (
        <div>
            <Container className="bg-light-blue vh-100 pt-3">
                {data.map((data, index) => (
                    <div className="bg-box p-3 mb-3">
                        <div className="d-flex justify-content-between">
                            <div className="text-flock-gen">
                                {data.generation}
                            </div>
                            <div className="d-flex flex-column">
                                <img
                                    src={DeleteTab}
                                    alt="delete_tab"
                                    onClick={() => {
                                        deleteTab
                                            ? setDeleteTab(false)
                                            : setDeleteTab(true);
                                    }}
                                />
                                <div>{deleteTab ? showDeleteBtn() : null}</div>
                            </div>
                        </div>
                        <p className="text-date">{data.date}</p>
                        <div className="d-flex">
                            <div className="container-day px-2 mr-1">
                                <p className="text-container">
                                    {data.age} Days
                                </p>
                            </div>
                            <div className="container-gender px-2 mr-1">
                                <p className="text-container">{data.gender}</p>
                            </div>
                            <div className="container-type px-2">
                                <p className="text-container">{data.type}</p>
                            </div>
                        </div>
                        <div className="d-flex mt-2 justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={BarnIcon} alt="barn_icon" />
                                <p className="text-detail ml-2">House 1</p>
                            </div>
                            <div className="d-flex">
                                <img src={ChickenIcon} alt="chicken_icon" />
                                <p className="text-detail ml-2">112 Chickens</p>
                            </div>
                            <img
                                src={NextArrow}
                                alt="next_arrow"
                                onClick={() => manageHouse()}
                            />
                        </div>
                    </div>
                ))}
                <img
                    className="d-block ml-auto mt-5"
                    src={AddBtn}
                    alt="add_btn"
                />
            </Container>
        </div>
    );
};

export default ManageChicken;
