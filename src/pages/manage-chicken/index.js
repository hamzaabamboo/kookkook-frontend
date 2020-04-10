import React, { useState } from 'react';

import AddBtn from '../../static/icon/addBtn.svg';
import BarnIcon from '../../static/icon/barn_manage.svg';
import ChickenIcon from '../../static/icon/chicken-manage.svg';
import Container from 'react-bootstrap/Container';
import DeleteBtn from '../../static/icon/deleteBtn.svg';
import DeleteTab from '../../static/icon/delete.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import MyVerticallyCenteredModal from '../../components/ConfirmationMsg/index.js';
import NextArrow from '../../static/icon/next_manage.svg';
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="/"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <img src={DeleteTab} alt="delete_tab" />
    </a>
));

const CustomCard = ({ data, onDelete }) => {
    // const [deleteTab, setDeleteTab] = useState(false);
    const history = useHistory();
    const manageHouse = () => {
        history.push('/manage-flock');
    };
    const showHouseData = () => {
        history.push('/show-house-data');
    };
    const showDeleteBtn = () => {
        return <img src={DeleteBtn} alt="delete_btn" />;
    };
    return (
        <div className={`${styles.bgCard} p-3 mb-3 mx-auto`}>
            <div className="d-flex justify-content-between">
                <div className={styles.textFlockGen}>{data.generation}</div>
                <div className="d-flex flex-column">
                    <Dropdown alignRight>
                        <Dropdown.Toggle
                            as={CustomToggle}
                            id="dropdown-custom-components"
                        ></Dropdown.Toggle>

                        <Dropdown.Menu className={styles.dropdownMenu}>
                            <Dropdown.Item className={styles.dropdownItem}>
                                <div onClick={() => onDelete()}>
                                    {showDeleteBtn()}
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* <img
                        src={DeleteTab}
                        alt="delete_tab"
                        onClick={() => {
                            deleteTab
                                ? setDeleteTab(false)
                                : setDeleteTab(true);
                        }}
                    /> */}
                    {/* <div onClick={() => onDelete(data.id)}>
                        {deleteTab ? showDeleteBtn() : null}
                    </div> */}
                </div>
            </div>
            <p className={styles.textDate}>{data.date}</p>
            <div className="d-flex">
                <div className={`${styles.containerDay} px-2 mr-1`}>
                    <p className={styles.textContainer}>{data.age} Days</p>
                </div>
                <div className={`${styles.containerGender} px-2 mr-1`}>
                    <p className={styles.textContainer}>{data.gender}</p>
                </div>
                <div className={styles.containerType}>
                    <p className={styles.textContainer}>{data.type}</p>
                </div>
            </div>
            <div className="d-flex mt-2 justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={BarnIcon} alt="barn_icon" />
                    <p className={`${styles.textDetail} ml-2`}>House 1</p>
                </div>
                <div className="d-flex">
                    <img src={ChickenIcon} alt="chicken_icon" />
                    <p className={`${styles.textDetail} ml-2`}>112 Chickens</p>
                </div>
                <img
                    src={NextArrow}
                    alt="next_arrow"
                    onClick={() => manageHouse()}
                />
            </div>
        </div>
    );
};

const ManageChicken = () => {
    const [toDelete, setToDelete] = useState();
    const [data, setData] = useState([
        {
            id: 1,
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
        {
            id: 2,
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
        {
            id: 3,
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
        {
            id: 4,
            generation: '2020/1',
            date: '15 March 2020',
            age: 4,
            gender: 'male',
            type: 'chicken type',
        },
    ]);

    const createCard = (newItem) => {
        setData([...data, newItem]);
    };

    const deleteCard = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (
        <div>
            <MyVerticallyCenteredModal
                show={!!toDelete}
                title="The flock 2020/1 will be deleted from the database forever,
                are you sure?"
                actionText="Delete"
                onHide={() => setToDelete()}
                onAction={() => {
                    deleteCard(toDelete);
                    setToDelete();
                }}
            />
            <Container className={`${styles.bgLightBlue} vh-100 pt-3`}>
                {data.map((item) => (
                    <CustomCard
                        key={item.id}
                        data={item}
                        onDelete={() => setToDelete(item.id)}
                    />
                ))}
                <img
                    className="d-block ml-auto mt-5"
                    src={AddBtn}
                    alt="add_btn"
                    onClick={() => {
                        createCard({
                            id: 4,
                            generation: '2020/1',
                            date: '15 March 2020',
                            age: 4,
                            gender: 'male',
                            type: 'chicken type',
                        });
                    }}
                />
            </Container>
        </div>
    );
};

export default ManageChicken;
