import React from "react";
import AchievementCard from "./AchievementCard.jsx";

const Hero_Section = () => {
  const heroImageSrc = "hero-image 1.png";

  return (
    <section className="hero_Section container">

      <div className="left-side">
        <h1 className="hero-title">
          Learn the art of <br />
          <span className="highlight-text">Game Dev</span>
        </h1>
        <p>
          This is a comprehensive course on Game Development. You will learn
          everything from generating an idea to publishing your games to
          different platforms.
        </p>
        <button className="btn light enroll-btn">Enroll Now</button>
      </div>

      <div className="right-side">

        <img
          src={heroImageSrc}
          alt="Illustration of a student studying game development"
          fetchPriority="high"
        />

        <AchievementCard
          type="students"
          value="32K"
          label="Students Enrolled"
        />

        <AchievementCard
          type="rating"
          value="4.7"
          label="Overall Rating"
          icon="star.png"
        />
      </div>
    </section>
  );
};

export default Hero_Section;