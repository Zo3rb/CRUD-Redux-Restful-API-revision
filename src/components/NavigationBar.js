import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';

const NavigationBar = () => {
    // Declaring the Navbar's Toggler State and Toggle Method
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand to="/">
                Gamee
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink
                            className="text-white mx-2 text-decoration-none"
                            exact
                            to="/">HOME
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="text-white mx-2 text-decoration-none"
                            to="/create">ADD
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="text-white mx-2 text-decoration-none"
                            to="/help">HELP
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavigationBar;
