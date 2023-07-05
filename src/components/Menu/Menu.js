import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import '../Menu/Menu.css';

import Icon1 from '../../images/Icon1.svg';
import Icon2 from '../../images/Icon2.svg';
import Icon3 from '../../images/Icon3.svg';
import Icon4 from '../../images/Icon4.svg';
import Icon5 from '../../images/Icon5.svg';
import Icon6 from '../../images/Icon6.svg';
import Icon7 from '../../images/Icon7.svg';


const Menu = () => {
  return (
      <Container className='menu-wrapper'>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Item>
            <Nav.Link href="/home" className="menuStyle"><span className="iconWrapper"><img
                            src={Icon1}
                            alt="Enter Icon"                            
                        /></span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="menuStyle"><span className="iconWrapper"><img
                            src={Icon2}
                            alt="Enter Icon"                            
                        /></span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><img
                            src={Icon3}
                            alt="Enter Icon"                            
                        /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><img
                            src={Icon4}
                            alt="Enter Icon"                            
                        /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="menuStyle">
              <span className="iconWrapper"><img
                            src={Icon5}
                            alt="Enter Icon"                            
                        /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><img
                            src={Icon6}
                            alt="Enter Icon"                            
                        /></span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services" className="menuStyle">
              <span className="iconWrapper"><img
                            src={Icon7}
                            alt="Enter Icon"                            
                        /></span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
  );
};

export default Menu;