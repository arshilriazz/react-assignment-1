import React from "react";
import "../styles/aboutmestyle.css";

const AboutMe = () => {
  return (
    <div className="container">
      <h1>Arshil Riaz</h1>
      <h2>Intern at ZeMoSo</h2>
      <div className="image">
        <img
          className="img-robot"
          src="https://assets.onlinelabels.com/images/clip-art/qubodup/Cute%20Robot%20Head-173913_thumb.png"
          alt="me"
        />
      </div>
      <p className="parag">
        Hi I am Arshil, I am a dev intern at ZeMoSo. I love watching movies and
        football. I really like playing table tennis. I like to learn new things
        and I love to cook and spend my time eating it.
      </p>
    </div>
  );
};

export default AboutMe;
