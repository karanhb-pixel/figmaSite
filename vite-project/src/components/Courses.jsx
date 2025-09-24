import React from "react";

const Courses = () => {
  return (
    <div className="courses_Section container">
      <h2>Our Courses</h2>
      <div className="courses-lists">
        <div className="courses-block">
          <img src="courses 1.png" alt="" />
          <div className="courses-title-duration">

          <h3>Game Design Essentials</h3>
          <p>8 Hrs</p>
          </div>
        </div>
        <div className="courses-block">
          <img src="courses 2.png" alt="" />
          <div className="courses-title-duration">

          <h3>Unity Game Engine Fundamentals 8 HRS</h3>
          <p>10 Hrs</p>
          </div>
        </div>
      </div>
      <button className="btn light">All Courses</button>
    </div>
  );
};

export default Courses;
