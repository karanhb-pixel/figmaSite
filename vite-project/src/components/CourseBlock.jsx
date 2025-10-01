import React from "react";

const CourseBlock = ({ title, duration, imageSrc, altText }) => {
  return (
    <article className="courses-block">
      <img src={imageSrc} alt={altText} />
      <div className="courses-title-duration">
        <h3>{title}</h3>
        <p>{duration}</p>
      </div>
    </article>
  );
};

export default CourseBlock;
