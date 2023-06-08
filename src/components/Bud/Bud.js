import React from 'react';
import { Container } from 'react-bootstrap';
import '../Bud/Bud.css';
import Menu from '../Menu/Menu.js'

const Bud = () => {
    return (
        <div className="container-wrapper">
            <Container fluid className="dotted-background">
                <div className="content-wrapper">
                    <div className="menu-wrapper d-flex">
                        <Menu />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Bud;
