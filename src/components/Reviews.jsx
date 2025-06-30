import React from 'react';
import './Reviews.css';

function Reviews() {
  return (
    <div className="reviews">
      <h2>Client Feedback & Review</h2>
      <form
        action="https://formsubmit.co/saritanaikwade03@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <label>Your Name *</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>Address *</label>
          <input type="text" name="address" required />
        </div>

        <div className="form-group">
          <label>What did you like about our service/inquiry experience? *</label>
          <textarea name="like_service" required></textarea>
        </div>

        <div className="form-group">
          <label>What can we improve? *</label>
          <textarea name="improve_service" required></textarea>
        </div>

        <div className="form-group">
          <label>If you didn’t book, why?</label>
          <select name="reason_not_booking">
            <option value="">Select</option>
            <option>Pricing</option>
            <option>Just exploring options</option>
            <option>Found another artist</option>
            <option>Not ready yet</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Would you consider booking again? *</label>
          <select name="booking_again" required>
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
        </div>

        <div className="form-group">
          <label>How did you hear about us? *</label>
          <input type="text" name="hear_about" required />
        </div>

        <button type="submit" className="submit-btn">Send Review</button>
      </form>
    </div>
  );
}

export default Reviews;
