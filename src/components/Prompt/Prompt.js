import React from 'react';
import { Form } from 'react-bootstrap';
import { ImEnter } from 'react-icons/im';
import '../Prompt/Prompt.css';

const Prompt = () => {
    return (
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea">
                    <div className="textarea-container">
                        <Form.Control
                            as="textarea"
                            className="chat-textarea"
                            placeholder="Describe the image you would like to generate"
                        />
                        <ImEnter className="icon" />
                    </div>
                </Form.Group>
            </Form>
    );
};

export default Prompt;
