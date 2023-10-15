import React from "react";
import "./contact.css";
import { useState } from "react";
import { validEmail } from "../../data/regEg";

export const Contact = () => {
  //   16.1 Full name (Minimum number of characters is 3, required)

  // 16.2 Subject (Minimum number of characters is 3, required)

  // 16.3 Email (Must be a valid email address, required)

  // 16.4 Body (Minimum number of characters is 3, required)

  // 16.5 Submit button
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [showName, setShowName] = useState(false);
  const [showSubject, setShowSubject] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSubmit, setSubmit] = useState(false);

  const validName = name.length > 2;

  const validSubject = subject.length > 2;

  const validText = text.length > 2;

  const validEmailTrue = validEmail.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validName) {
      setShowName(false);
    } else {
      setShowName(true);
    }

    if (validSubject) {
      setShowSubject(false);
    } else {
      setShowSubject(true);
    }

    if (validEmailTrue) {
      setShowEmail(false);
    } else {
      setShowEmail(true);
    }

    if (validText) {
      setShowText(false);
    } else {
      setShowText(true);
    }

    if (validName && validEmailTrue && validSubject && validText) {
      console.log("Name:", name);
      console.log("Subject:", subject);
      console.log("Email:", email);
      console.log("Message:", text);
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  };
  // {show && <div>Item added</div>}
  return (
    <div>
      <h1 className="contactTitle">Send us your questions!</h1>
      <form className="contactForm">
        <div>Name:</div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        {showName && (
          <div className="error">Name must be 3 characters or longer</div>
        )}
        <div>Subject:</div>
        <input type="text" onChange={(e) => setSubject(e.target.value)} />
        {showSubject && (
          <div className="error">Subject must be 3 characters or longer</div>
        )}
        <div>Email:</div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        {showEmail && <div className="error">This is not a valid email</div>}
        <div>Message:</div>
        <input type="textarea" onChange={(e) => setText(e.target.value)} />
        {showText && (
          <div className="error">Message must be 3 characters or longer</div>
        )}
        {showSubmit && (
          <div className="submitted">Your message has been submitted!</div>
        )}
        <button className="submitButton" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
