import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    console.log("Form Data:", Object.fromEntries(formData));

    emailjs
      .sendForm("service_f0sj6m8", "template_jvbpm1q", form.current, {
        publicKey: "0VS4GSg0J4uFJ0JP-",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container className="align-items-center">
        <Row>
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="from_name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="from_email" required />

              <label htmlFor="number">Phone No.</label>
              <input type="number" id="number" name="number" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />

              <button className="contact-form" type="submit">
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
