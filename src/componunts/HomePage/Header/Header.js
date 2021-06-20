import React, { useContext } from "react";
import "./Header.css";

import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { handleSignOut } from "../../firebase/FirebaseAuth";
import { userContext } from "../../../App";

const Header = () => {
    const { user, setUser, setAdmin } = useContext(userContext);

    const logOut = () => {
        handleSignOut().then((res) => {
            setAdmin(false);
            setUser({});
        });
    };
    return (
        <div className="container">
            <Navbar bg="" expand="lg">
                <Navbar.Brand as={Link} to="/home" className="header-titel">
                    Digital Services Center
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link
                            as={Link}
                            to="/home"
                            className="items header-item"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/service"
                            className="items header-item"
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="items header-item"
                        >
                            About us
                        </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    to="/dashbord"
                                    className="items header-item"
                                >
                                    Dash Bord
                                </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="items header-item"
                        >
                            Contact Us
                        </Nav.Link>

                        {user?.email ? (
                            <>
                                <Button
                                    as={Link}
                                    to="/logIng"
                                    variant="success"
                                    onClick={logOut}
                                    className="items"
                                >
                                    LogOut
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    as={Link}
                                    to="/logIng"
                                    variant="success"
                                    className="items"
                                >
                                    Loging
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
