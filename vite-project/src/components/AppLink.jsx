import React from 'react';

const AppLink = ({ storeName, iconSrc, linkUrl }) => {
    return (
        <a
            href={linkUrl}
            className="app-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download on ${storeName}`}
        >
            <img
                src={iconSrc}
                alt={`${storeName} icon`}
            />
            <span>{storeName}</span>
        </a>
    );
};

export default AppLink;