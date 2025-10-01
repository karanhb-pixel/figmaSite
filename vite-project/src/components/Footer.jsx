import React from "react";
import FooterLinkGroup from "./FooterLinkGroup.jsx";
import SubscriptionForm from "./SubscriptionForm.jsx";

const footerData = [
  {
    title: "Quick Links",
    links: [
      { text: "About Us", href: "#about" },
      { text: "Contact Us", href: "#contact" },
      { text: "Privacy Policy", href: "#privacy" },
      { text: "Terms & Conditions", href: "#terms" },
    ],
  },
  {
    title: "Courses",
    links: [
      { text: "Log In", href: "#login" },
      { text: "Download", href: "#download" },
      { text: "All Courses", href: "#courses" },
    ],
  },
];

const contactLinks = [
    { text: "contact@email.com", href: "mailto:contact@email.com" },
    { 
        isSocial: true,
        icons: [
            { src: "facebook_icon.png", href: "#facebook", alt: "Facebook" },
            { src: "instagram_icon.png", href: "#instagram", alt: "Instagram" },
        ]
    }
];

const Footer = () => {
  return (
    <footer className="footer_Section container">

      <div className="links-container">

        {footerData.map((group, index) => (
          <FooterLinkGroup 
            key={index} 
            title={group.title} 
            links={group.links} 
          />
        ))}

        <div className="footer-links" role="navigation" aria-label="Contact Information">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-link-list">
                {contactLinks.map((link, index) => (
                    <li 
                        key={index} 
                        className={`footer-link-item ${link.isSocial ? 'social-icons' : ''}`}
                    >
                        {link.isSocial ? (
                            link.icons.map((icon, iconIndex) => (
                                <a key={iconIndex} href={icon.href} target="_blank" rel="noopener noreferrer" aria-label={icon.alt}>
                                    <img src={icon.src} alt={`${icon.alt} icon`} />
                                </a>
                            ))
                        ) : (
                            <a href={`mailto:${link.text}`}>{link.text}</a>
                        )}
                    </li>
                ))}

                <SubscriptionForm />
            </ul>
        </div>
      </div>

      <p className="footer-note">© {new Date().getFullYear()} GameDev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;