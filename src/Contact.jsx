import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${name}! Your message is received.`);

    setName("");
    setEmail("");
  };

  return (
    <main>
      <section className="hero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      <section className="section">
        <h2>Get In Touch</h2>
        <p>Feel free to contact us anytime.</p>
      </section>

      <section className="section light">
        <h2>Our Information</h2>
        <p>Email: info@mywebsite.com</p>
        <p>Phone: +880 1234567890</p>
      </section>

      <section className="section">
        <h2>Send Message</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;