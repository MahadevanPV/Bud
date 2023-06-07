import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import '../Header/Header.css';
import budappicon1 from '../../images/budappicon.png';
import Vector from '../../images/Vector.png';
import profileIcon from '../../images/profileIcon.png';
import { FaRegStar } from "react-icons/fa";
import { TbStack2 } from "react-icons/tb";
import { HiPlusSm } from "react-icons/hi";

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navBorder'>
                <Container>
                    <Navbar.Brand href="#home"> <img src={budappicon1} alt="Logo" /></Navbar.Brand>
                    <Navbar.Brand href="#home"> <img src={Vector} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Form className="d-flex">
                                <Button variant="outline-success" className='mr-8 new btn'><HiPlusSm />New</Button>
                                <Button variant="outline-success" className='mr-8 save btn'><FaRegStar />Save</Button>
                                <Button variant="outline-success" className='mr-8 explorer btn'><TbStack2 />Explorer</Button>
                                <img
                                    src={profileIcon}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="Brand logo"
                                />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;