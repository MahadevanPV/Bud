
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import '../Header/Header.css';
import budappicon1 from '../../images/budappicon.png';
import { ReactComponent as Stack } from '../../images/stack.svg';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as Plus } from '../../images/+.svg';
import { ReactComponent as Person } from '../../images/person.svg';
import profileIcon from '../../images/profileIcon.svg';

const Header = ({ handleEnterClick }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navBorder">
      <Container fluid className="borderClass">
        <Navbar.Brand href="#home">
          <img src={budappicon1} alt="Logo" className='imgIcon'/>
        </Navbar.Brand>
        <Form>
          <Form.Control
            type="text"
            className="fileName"
            placeholder="File Name 0001"
            value={inputValue}
            onChange={handleInputChange}
          />
        </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Form className="d-flex">
              <Button
                variant="outline-success"
                className="mr-8 new btn d-flex align-items-center"
                onClick={handleEnterClick}
              >
                <Plus className='imgIcon'/> New
              </Button>
              <Button variant="outline-success" className="mr-8 save btn d-flex align-items-center">
                <Star className='imgIcon'/> Save
              </Button>
                <Stack className='imgIcon'/>
                <Person className='imgIcon'/>
              <img src={profileIcon} alt="profile" className="profileIcon imageIcon" />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;