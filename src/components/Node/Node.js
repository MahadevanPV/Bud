import React from "react";
import './Node.css';

function Node({ data }) {
    const image = data && data.image;
    const label = data && data.label;
  
    let altText = '';
    if (image) {
      // Extract meaningful text from the image filename or use a specific description
      altText = 'Description for the image'; // Replace with a meaningful description
    }
  
    return (
      <div className="node-container">
        {image && <img src={image} alt={altText} className="node-image" />}
        {label && <div className="node-label">{label}</div>}
      </div>
    );
  }


export default Node;