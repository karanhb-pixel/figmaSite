// components/TestimonialBlock.jsx
import React from 'react';

const TestimonialBlock = ({ content, name, role, imageSrc, blockType }) => {
    return (
        <figure className={`testimonys_block ${blockType}`}>
            <blockquote className="testimonys_block-content">
                <p>{content}</p>
            </blockquote>
            <figcaption className="testimonys_block-name-image">
                <div className="testimonys_block-name">
                    <h3 className="name">{name}</h3>
                    <p className="role">{role}</p>
                </div>
                <div className="testimonys_block-image">
                    <img 
                        src={imageSrc} 
                        alt={`Portrait of ${name}`} // Good Alt Text
                    />
                </div>
            </figcaption>
        </figure>
    );
};

export default TestimonialBlock;