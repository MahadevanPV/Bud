import React from 'react';
import { Container } from 'react-bootstrap';
import '../Bud/Bud.css';
import Menu from '../Menu/Menu.js'
import Prompt from '../Prompt/Prompt.js'

const Bud = () => {
    return (
        <div className="container-wrapper">
            <Container fluid>
                <div className="content-wrapper">
                    <div className="menu-wrapper d-flex">
                        <Menu />
                    </div>
                </div>
            </Container>
            <div className="prompt-wrapper">
                <Prompt />
            </div>
        </div>
    );
};

export default Bud;
