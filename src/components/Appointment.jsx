import React, { useRef } from 'react';
import './Appointment.css';

function Appointment() {
  const formRef = useRef();

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const number = form.number.value;
    const date = form.date.value;
    const lookType = form.lookType.value;
    const noOfLooks = form.noOfLooks.value;
    const location = form.location.value;
    const message = form.message.value;

    const whatsappMessage = 
      `Appointment Details:%0A` +
      `Name: ${name}%0A` +
      `Contact Number: ${number}%0A` +
      `Date: ${date}%0A` +
      `Look Type: ${lookType}%0A` +
      `No. of Looks: ${noOfLooks}%0A` +
      `Wedding Location: ${location}%0A` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/919021151051?text=${whatsappMessage}`,
      '_blank'
    );
  };

  return (
    <div className="appointment">
      <div className="appointment-container">
        <h2>Book Your Appointment</h2>
        <form
          ref={formRef}
          action="https://formsubmit.co/saritanaikwade03@gmail.com"
          method="POST"
          target="_blank"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="tel" name="number" placeholder="Mobile Number" required />
          <input type="date" name="date" required />
          <input type="text" name="lookType" placeholder="Look Type (Bridal, Engagement...)" required />
          <input type="number" name="noOfLooks" placeholder="No. of Looks" required />
          <input type="text" name="location" placeholder="Wedding Location" required />
          <textarea name="message" placeholder="Message (Optional)"></textarea>

          <div className="button-group">
            <button type="submit" className="email-btn">Send Email</button>
            <button onClick={handleWhatsApp} className="whatsapp-btn">Send WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;
