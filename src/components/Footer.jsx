import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Glam Up By Sakshi</h3>
        <p>Best Bridal Makeup Artist</p>

        <div className="footer-contact">
          <p><strong>Location:</strong> Infront of Sanjivani Engineering College, Godavari Complex, Signapur, Kopargaon 423601</p>
          <p><strong>Contact:</strong> 9021151051, 8857812903</p>
        </div>

        <div className="footer-social">
          <p>Follow Us:</p>
          <a href="https://www.instagram.com/glam_up_by_sakshi?igsh=cXg2aDBvODA0dXAy" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://youtube.com/@sakshinaikwade1124?si=FL00lWXuiU7UyVFQ" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Glam Up By Sakshi | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
