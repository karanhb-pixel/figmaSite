import React from 'react'

 const Navbar = () => {
  return (
    
        <nav>
            <div className="nav-logo">
                GD. 
            </div>
            {/* <div className="nav-links"> */}
                <ul className="nav-link-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Our Work</a></li>
                    <li><button className='btn dark enroll-btn'>
                        {/* <img src="enroll_icon.svg" alt="" />  */}
                        Enroll Now</button></li>
                </ul>
            {/* </div> */}
            <div className="menu_icon"><img src="Menu_Outline.svg" alt="" /></div>
            <div className="close_icon"><img src="XOutline.svg" alt="" /></div>

        </nav>
   
  )
}


export default Navbar;