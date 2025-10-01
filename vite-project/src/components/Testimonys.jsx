import React from "react";
import TestimonialBlock from "./TestimonialBlock.jsx";

const testimonialsData = [
  {
    id: 1,
    content: "This is a great course. It helped me a lot. Thank you :)",
    name: "Jane Cooper",
    role: "Developer, Sony",
    imageSrc: "testimonys 1.png",
    blockType: "block-1",
  },
  {
    id: 2,
    content: "Amazing Work! Well done!",
    name: "Jacob Jones",
    role: "Designer, Facebook",
    imageSrc: "testimonys 2.png",
    blockType: "block-2",
  },
];

const Testimonys = () => {
  return (
    <section className="testimonys_Section container">

      <div className="left-side">
        <div className="hr-bar" aria-hidden="true"></div>

        <div className="testimonys_blocks">
            {testimonialsData.map((testimonial) => (
                <TestimonialBlock
                    key={testimonial.id}
                    content={testimonial.content}
                    name={testimonial.name}
                    role={testimonial.role}
                    imageSrc={testimonial.imageSrc}
                    blockType={testimonial.blockType}
                />
            ))}
        </div>
      </div>

      <div className="right-side">
        <h2>What our students say</h2>
        <p>
          All students get access to all the videos and also the source code of
          the projects.
          <br />
          You will also have access to a private Discord channel where you can
          discuss your doubts.
        </p>
        <button className="btn light">Learn More</button>
      </div>

      <button className="btn light alt-sm">Learn More</button>
    </section>
  );
};

export default Testimonys;