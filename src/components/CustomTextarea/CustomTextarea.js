import React from 'react';
import TextEnter from '../../images/TextEnter.svg';

const CustomTextarea = ({ description, handleImageClick }) => {
  return (
    <div className="textBox">
      <span className="sideBorder"></span>
      <textarea className="canvasText" defaultValue={description} />
      <img
        src={TextEnter}
        alt="TextEnter"
        className="text-enter-image"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default CustomTextarea;
