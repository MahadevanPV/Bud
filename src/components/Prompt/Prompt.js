import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import '../Prompt/Prompt.css';


const Prompt = () => {
    return (
        <div className='container'>
            <InputGroup>
                <FormControl placeholder="Search..." />
                <InputGroup.Text>
                        {/* <FontAwesomeIcon icon={faSearch} /> */}
                    </InputGroup.Text>
            </InputGroup>
        </div>
    );
};

export default Prompt;
