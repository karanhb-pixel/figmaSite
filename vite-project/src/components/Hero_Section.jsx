import React from "react";

const Hero_Section = () => {
  return (
    <div className="hero_Section container">
      <div className="left-side">
        <h1 className="hero-title">
          Learn the art of <br />
          Game Dev
        </h1>
        <p>
          This is a comprehensive course on Game Development. You will learn
          everything from generating an idea to publishing your games to
          different platforms.
        </p>
        <button className="btn light enroll-btn">Enroll Now</button>
      </div>
      <div className="right-side">
        <div className="achivement-cards">
          <div className="achivement-card students-enrolled">
            <div className="content">
              <div>
                <h3>32K</h3>
              </div>
              <p>Students Enrolled</p>
            </div>
            <div className="bg"></div>
          </div>
        </div>
        <div className="achivement-cards">
          <div className="achivement-card overall-rating">
            <div className="content">
              <div>
                <h3>4.7</h3>
                <img src="star.png" alt="" />
              </div>
              <p>Overall Rating</p>
            </div>
            <div className="bg"></div>
          </div>
        </div>
        <img src="hero-image 1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero_Section;
