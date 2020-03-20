import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Hamburger from '../../static/icon/hamburger.svg';
import ProfilePic from '../../static/icon/profile_pic.svg';
import SettingLogo from '../../static/icon/settings.svg';
import TermLogo from '../../static/icon/term.svg';
import HelpLogo from '../../static/icon/help.svg';
import CreateAccountLogo from '../../static/icon/createaccount.svg';
import ManageChickenLogo from '../../static/icon/managechicken.svg';
import LogoutLogo from '../../static/icon/logout.svg';
import BackBtn from '../../static/icon/backBtn.svg';
import './index.scss';
import { slide as Menu } from 'react-burger-menu';

const Nav = () => {
    // const showSettings = e => {
    //     e.preventDefault();
    // };
    return (
        <>
            <Menu
                right
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
                customBurgerIcon={<img src={Hamburger} alt="hamburger" />}
            >
                <div className="d-flex flex-column align-items-end mb-4">
                    <img src={ProfilePic} alt="profile_pic" className="mb-2" />
                    <div className="text-name">Worker Name</div>
                    <DropdownButton id="btn-dropdown" title="House A">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Something else
                        </Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="border-line"></div>
                <div className="my-4">
                    <img src={SettingLogo} alt="setting_logo" />
                    <a id="home" className="menu-item text-menu ml-3" href="/">
                        Settings and Privacy
                    </a>
                </div>
                <div className="my-4">
                    <img src={TermLogo} alt="term_logo" />
                    <a id="about" className="menu-item text-menu ml-3" href="/">
                        Term and Conditions
                    </a>
                </div>
                <div className="my-4">
                    <img src={HelpLogo} alt="help_logo" />
                    <a
                        id="contact"
                        className="menu-item text-menu ml-3"
                        href="/"
                    >
                        Help
                    </a>
                </div>
                <div className="my-4">
                    <img src={CreateAccountLogo} alt="create_logo" />
                    <a
                        id="contact"
                        className="menu-item text-menu ml-3"
                        href="/"
                    >
                        Create Account
                    </a>
                </div>
                <div className="my-4">
                    <img src={ManageChickenLogo} alt="manage_logo" />
                    <a
                        id="contact"
                        className="menu-item text-menu ml-3"
                        href="/manage-chicken"
                    >
                        Manage Chicken
                    </a>
                </div>
                <div className="my-4">
                    <img src={LogoutLogo} alt="logout_logo" />
                    <a
                        id="contact"
                        className="menu-item text-menu ml-3"
                        href="/"
                    >
                        Logout
                    </a>
                </div>
            </Menu>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="bg-yellow"
                variant="dark"
            >
                <img src={BackBtn} alt="back_btn" />
                <Navbar.Brand
                    href="#home"
                    className="text-align-center flex-grow-1 m-0"
                >
                    kookkook
                </Navbar.Brand>
            </Navbar>
        </>
    );
};

export default Nav;
