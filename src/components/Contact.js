import React from 'react';
import './Styles.css'; // Import custom CSS for Contact component styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {/* <div className="contact-info">
        <p>Email: alfiihsan49@gmail.com</p>
        <p>Phone: +62 822 8373 0594</p>
        <p>Address: Perum. Bukit Raya Blok D6 No.6 , Batam, Indonesia</p>
      </div> */}
      {<div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send</button>
        </form>
      </div>}
    </div>
  );
};

export default Contact;
