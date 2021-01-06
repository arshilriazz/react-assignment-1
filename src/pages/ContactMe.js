import React from "react";
import Form from "../molecules/Form";
import "../styles/contactme.css";

const ConatctMe = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2 className="heading">Contact Me</h2>
        <p className="sizeOfLetters">
          If you want to contact me feel free to send me a message and the
          response will be back in no time
        </p>
        <br />
      </div>
      <Form />
    </section>
  );
};

export default ConatctMe;
