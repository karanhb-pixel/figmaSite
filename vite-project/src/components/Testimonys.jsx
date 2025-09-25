import React from "react";

const Testimonys = () => {
  return (
    <div className="testimonys_Section container">
      <div className="left-side">
        <div className="hr-bar"></div>
        <div className="testimonys_blocks">

        <div className="testimonys_block block-1">
          <p className="testimonys_block-content">
            This is a great course. It helped me a lot. Thank you :)
          </p>
          <div className="testimonys_block-name-image">
            <div className="testimonys_block-name">
              <h3>Jane Cooper</h3>
              <p>Developer, Sony</p>
            </div>
            <div className="testimonys_block-image">
              <img src="testimonys 1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="testimonys_block block-2">
          <p className="testimonys_block-content">Amazing Work! Well done!</p>
          <div className="testimonys_block-name-image">
            <div className="testimonys_block-name">
              <h3>Jacob Jones</h3>
              <p>Designer, Facebook</p>
            </div>
            <div className="testimonys_block-image">
              <img src="testimonys 2.png" alt="" />
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default Testimonys;
