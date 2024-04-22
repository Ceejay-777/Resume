import React, { useRef, useState } from "react";
import Skillbar from "../reuseables/Skillbar";
import TextareaAutosize from "react-textarea-autosize";
import Socials from "../reuseables/Socials.jsx";
import Header from "../reuseables/Header.jsx";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const messageInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fname, email, message);
  };

  
  return (
    <div className="main dark:bg-pri transition-all duration-500">
      <Header>Contact Me</Header>
        <div className="mx-auto w-fit mt-8">
          <Socials />
        </div>
    </div>
  );
};

export default Contact;
