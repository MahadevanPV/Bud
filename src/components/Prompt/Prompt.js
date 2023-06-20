import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../Prompt/Prompt.css';
import enter from '../../images/enter.svg';

const Prompt = ({ handleEnterClick }) => {
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = () => {
        if (description.trim() !== '') {
            handleEnterClick(description);
            setDescription('');
        }
    };

    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea">
                <div className="textarea-container">
                    <div className="textarea-wrapper">
                        <Form.Control
                            as="textarea"
                            className="chat-textarea"
                            placeholder="Describe the image you would like to generate"
                            value={description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="icon-wrapper">
                        <img
                            src={enter}
                            alt="Enter Icon"
                            className={`enter-icon ${description.trim() === '' ? 'disabled' : ''}`}
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </Form.Group>
        </Form>
    );
};

export default Prompt;
