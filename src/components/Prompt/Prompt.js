import React from 'react';
import { Form } from 'react-bootstrap';
import { MdOutlineSportsVolleyball } from 'react-icons/md';
import { TfiHandPointLeft } from 'react-icons/tfi';
import '../Prompt/Prompt.css';

const Prompt = () => {
    return (
        <div className="container promptDiv">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea">
                    <div className="textarea-container">
                        <Form.Control
                            as="textarea"
                            className="chat-textarea"
                            placeholder="Describe the image you would like to generate"
                        />
                        <div className="icons-container">
                            <MdOutlineSportsVolleyball className="icon volleyball-icon" />
                            <TfiHandPointLeft className="icon hand-icon" />
                        </div>
                    </div>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Prompt;
