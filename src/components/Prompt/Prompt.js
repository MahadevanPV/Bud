import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import axios from 'axios';
import '../Prompt/Prompt.css';
import enter from '../../images/enter.svg';

const Prompt = ({ handleEnterClick }) => {
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };
    const handleSubmit = () => {
        if (description.trim() !== '') {
            // Handle the response data here
            // handleEnterClick(description, `data:image/png;base64,${response.data.output[0]}`);
            handleEnterClick(description, 'test');
            setDescription('');

        }
    };

    // const handleSubmit = () => {
    //     if (description.trim() !== '') {
    //         const requestBody = {
    //             prompt: description.trim(),
    //             height: 254,
    //             width: 471,
    //             num_inference_steps: 100,
    //             guidance_scale: 7.5,
    //             sampler: 'p_sampler',
    //             prior_cf_scale: 7,
    //             prior_steps: "25",
    //             negative_prior_prompt: "",
    //             negative_decoder_prompt: "",
    //             num_images_per_prompt: 1,
    //         };

    //         axios.post('http://216.48.187.144:6289/proxy/genimage/advanced/txt2img', requestBody)
    //             .then(response => {
    //                 // Handle the response data here
    //                 handleEnterClick(description,`data:image/png;base64,${response.data.output[0]}`);
    //                 setDescription('');
    //             })
    //             .catch(error => {
    //                 // Handle the error here
    //                 console.error('Error:', error);
    //             });
    //     }
    // };

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
