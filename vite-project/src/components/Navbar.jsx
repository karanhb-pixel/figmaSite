import React, { useState,useEffect } from 'react';

const Navbar = () => {
    // 1. Introduce state to manage the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll',handleScroll);

        return()=>{
            window.removeEventListener('scroll',handleScroll);

        };
    },[]);

    // 2. Determine the class name based on state for CSS control
    const menuClass = isMenuOpen ? 'nav-link-list open' : 'nav-link-list';

    return (
        // 3. Changed <nav> to be the main element, adhering to BEM for classes
        // The <nav> element is semantically correct for a navigation bar.
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <a href="/" className="nav-logo" aria-label="Go to homepage">
                GD.
            </a>

            {/* 4. Navigation Links (Menu) */}
            <ul 
                className={menuClass} 
                role="menu" // Semantic role for the list of menu items
            >
                {/* 5. Use <a> tags for navigation and <li> tags for list items */}
                <li role="none"><a href="#getourapp" role="menuitem">About</a></li>
                <li role="none"><a href="#courses" role="menuitem">Courses</a></li>
                <li role="none"><a href="#testimonys" role="menuitem">Testimonys</a></li>
                
                {/* 6. Action Button - role="none" removes the li item from the list's semantic structure */}
                <li role="none">
                    <button className="btn dark enroll-btn">
                        Enroll Now
                    </button>
                </li>
            </ul>

            {/* 7. Mobile Menu Toggle Buttons */}
            <button 
                className="menu_icon" 
                onClick={toggleMenu} 
                aria-label="Open menu"
                aria-expanded={isMenuOpen} // Accessibility: indicates the state
            >
                {/* Using an icon component or conditional rendering for clarity is better, but keeping current image tags */}
                <img src="Menu_Outline.svg" alt="Open Menu" />
            </button>

            {/* The close icon should often be rendered inside the menu itself, 
                but for simple toggling, it's fine here too. */}
            <button 
                className="close_icon" 
                onClick={toggleMenu}
                aria-label="Close menu"
                style={{ display: isMenuOpen ? 'block' : 'none' }}
            >
                <img src="XOutline.svg" alt="Close Menu" />
            </button>
        </nav>
    );
}

export default Navbar;