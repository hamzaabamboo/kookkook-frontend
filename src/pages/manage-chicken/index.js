import React, { useState } from 'react';
import styles from './index.module.scss';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import DeleteTab from '../../static/icon/delete.svg';
import BarnIcon from '../../static/icon/barn_manage.svg';
import ChickenIcon from '../../static/icon/chicken-manage.svg';
import NextArrow from '../../static/icon/next_manage.svg';
import AddBtn from '../../static/icon/addBtn.svg';
import DeleteBtn from '../../static/icon/deleteBtn.svg';
import { useHistory } from 'react-router-dom';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="/"
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        child =>
                            !value ||
                            child.props.children
                                .toLowerCase()
                                .startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

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
            <Container className={`${styles.bgLightBlue} vh-100 pt-3`}>
                {data.map((data, index) => (
                    <div className={`${styles.bgCard} p-3 mb-3`}>
                        <div className="d-flex justify-content-between">
                            <div className={styles.textFlockGen}>
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
                        <p className={styles.textDate}>{data.date}</p>
                        <div className="d-flex">
                            <div className={`${styles.containerDay} px-2 mr-1`}>
                                <p className={styles.textContainer}>
                                    {data.age} Days
                                </p>
                            </div>
                            <div
                                className={`${styles.containerGender} px-2 mr-1`}
                            >
                                <p className={styles.textContainer}>
                                    {data.gender}
                                </p>
                            </div>
                            <div className={styles.containerType}>
                                <p className={styles.textContainer}>
                                    {data.type}
                                </p>
                            </div>
                        </div>
                        <div className="d-flex mt-2 justify-content-between">
                            <div className="d-flex align-items-center">
                                <img src={BarnIcon} alt="barn_icon" />
                                <p className={`${styles.textDetail} ml-2`}>
                                    House 1
                                </p>
                            </div>
                            <div className="d-flex">
                                <img src={ChickenIcon} alt="chicken_icon" />
                                <p className={`${styles.textDetail} ml-2`}>
                                    112 Chickens
                                </p>
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
