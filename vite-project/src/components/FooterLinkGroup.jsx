import React from 'react';

const FooterLinkGroup = ({ title, links }) => (
  <div className="footer-links" role="navigation" aria-label={`Footer ${title} Links`}>
    <h3 className="footer-title">{title}</h3>
    <ul className="footer-link-list">
      {links.map((link, index) => (
        <li
          key={index}
          className={`footer-link-item ${link.isSocial ? 'social-icons' : ''}`}
        >
          {link.isSocial ? (
            link.icons.map((icon, iconIndex) => (
              <a key={iconIndex} href={icon.href} target="_blank" rel="noopener noreferrer" aria-label={icon.alt}>
                <img src={icon.src} alt={icon.alt} />
              </a>
            ))
          ) : (
            <a href={link.href}>{link.text}</a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkGroup;