import React from 'react';
import { Form } from 'react-bootstrap';
import '../Prompt/Prompt.css';
import enter from '../../images/enter.png';

const Prompt = ({ handleIconClick }) => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea">
                <div className="textarea-container">
                    <div className="textarea-wrapper">
                        <Form.Control
                            as="textarea"
                            className="chat-textarea"
                            placeholder="Describe the image you would like to generate"
                        />
                    </div>
                    <div className="icon-wrapper" onClick={handleIconClick}>
                        <img src={enter} alt="Enter Icon" className="enter-icon" />
                    </div>
                </div>
            </Form.Group>
        </Form>
    );
};

export default Prompt;
