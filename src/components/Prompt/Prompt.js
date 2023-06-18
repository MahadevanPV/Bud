import React from 'react';
import { Form } from 'react-bootstrap';
import { ImEnter } from 'react-icons/im';
import '../Prompt/Prompt.css';

const Prompt = () => {
    const handleIconClick = () => {
        // Handle the onClick event for the ImEnter icon here
        console.log('ImEnter icon clicked!');
        // Add your custom logic or function calls here
    };
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea">
                <div className="textarea-container">
                    <Form.Control
                        as="textarea"
                        className="chat-textarea"
                        placeholder="Describe the image you would like to generate"
                    />
                    <ImEnter className="icon" onClick={handleIconClick} />
                </div>
            </Form.Group>
        </Form>
    );
};

export default Prompt;
