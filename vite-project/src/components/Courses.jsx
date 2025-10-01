import React from "react";
import CourseBlock from "./CourseBlock.jsx";

const coursesData = [
  {
    id: 1,
    title: "Game Design Essentials",
    duration: "8 Hrs",
    imageSrc: "courses 1.png",
    altText: "Course cover for Game Design Essentials",
  },
  {
    id: 2,
    title: "Unity Game Engine Fundamentals",
    duration: "10 Hrs",
    imageSrc: "courses 2.png",
    altText: "Course cover for Unity Game Engine Fundamentals",
  },
];

const Courses = () => {
  return (
    <section className="courses_Section container" id="courses">
      <h2>Our Courses</h2>
      <div className="courses-lists">
        {coursesData.map((course) => (
          <CourseBlock
            key={course.id}
            title={course.title}
            duration={course.duration}
            imageSrc={course.imageSrc}
            altText={course.altText}
          />
        ))}
      </div>
      <button className="btn light">All Courses</button>
    </section>
  );
};

export default Courses;
