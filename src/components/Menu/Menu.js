import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { TbTextResize } from "react-icons/tb";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { IoHandRightOutline } from "react-icons/io5";
import { HiArrowTrendingUp, HiOutlineDocument } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";
import { BsCrop } from "react-icons/bs";
import '../Menu/Menu.css';

const Menu = () => {
  return (
      <Container className='menu-wrapper'>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Item>
            <Nav.Link href="/home" className="menuStyle"><span className="iconWrapper"><BsCrop /></span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="menuStyle"><span className="iconWrapper"><HiOutlineDocument /></span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><TbTriangleSquareCircle /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><TbTextResize /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><IoHandRightOutline /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><HiArrowTrendingUp /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><IoImageOutline /></span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
  );
};

export default Menu;