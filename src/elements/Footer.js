import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Stone Cold Records newsletter to receive info on our artist and
          music
        </p>
        <p className="footer-subscription-text">
          You can unsuscribe at anytime.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Investors</Link>
          </div>
         <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">YouTube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media"></section>
      <div className="social-media-wrap">
          <div className="footer-logo">
            link.social-logo
          </div>
      </div>
    </div>
  );
}

export default footer;
