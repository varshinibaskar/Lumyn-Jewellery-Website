import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <div className="contact-details">
        <p><strong>Email:</strong> info@jewelrystore.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Location:</strong> 123 Gold Street, Chennai, India</p>

        <h3>Our Branches:</h3>
        <ul>
          <li>Chennai – T Nagar</li>
          <li>Bangalore – MG Road</li>
          <li>Hyderabad – Banjara Hills</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactUs;
