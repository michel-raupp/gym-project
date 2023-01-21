import React from "react";
import { useState } from 'react';
import { TerciaryButton } from '../buttons/Buttons'
import emailjs from '@emailjs/browser'
import { Formulario, Footer, FormsSection } from "./Styles";

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || phone === '' || message === '') {
      console.log("It seems that you forgot to fill a form...");
      console.log("It seems that you forgot to fill a form...");
      return;
    }

    const temmplateParams = {
      from_name: name,
      email: email,
      phone: phone,
      message: message
    }

    emailjs.send("service_qin5epq", "template_mdf14ix", temmplateParams, "YJl9oIyHRHnb8meSd")
      .then((response) => {
        console.log("The email was sucessfully sent!", response.status, response.text)
        alert("The email was sucessfully sent!", response.status, response.text)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')

      }, (err) => {
        console.log("erro ", err)
        alert("ERROR: ", err)
      })
  }

  return (
    <>
      <FormsSection>
        <Formulario id="contact" onSubmit={sendEmail}>
        <h2> CONTACT US!</h2>
          <input
            className="input"
            type="text"
            placeholder="What is your name?"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />

          <input
            className="input"
            type="text"
            placeholder="Type your E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />

          <input
            className="input"
            type="text"
            placeholder="+55 (000) 0000-0000"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <br />

          <textarea
            className="textarea"
            placeholder="Tell us the details of what do you want, so we can better help you!"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <br />
          <TerciaryButton className="button" type="submit">
            Submit
            <i class="bx bx-right-arrow-alt bx-md" />
          </TerciaryButton>
        </Formulario>

      </FormsSection>
      <Footer>Designed and developed by Michel Raupp @ 2022. Icons by Unicons and
        Flaticons.</Footer>
    </>
  )

}

export default Contact;
