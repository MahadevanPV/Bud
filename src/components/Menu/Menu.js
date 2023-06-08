import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { TbTextResize } from "react-icons/tb";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { IoHandRightOutline } from "react-icons/io5";
import { HiArrowTrendingUp, HiOutlineDocument } from "react-icons/hi2";
import { IoImageOutline } from "react-icons/io5";
import { BsCrop } from "react-icons/bs";




const Menu = () => {
  return (
    <Container>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Item>
          <Nav.Link href="/home"><BsCrop/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about"><HiOutlineDocument /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services"><TbTriangleSquareCircle /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services"><TbTextResize /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services"><IoHandRightOutline /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services"><HiArrowTrendingUp /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services"><IoImageOutline /></Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default Menu;
