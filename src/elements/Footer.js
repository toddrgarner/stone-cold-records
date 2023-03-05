import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Logo from '../img/logo-16.png';

function footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join Stone Cold Records mailing list to receive info on our artist and
          music
        </p>
        <p className="footer-subscription-text">
          You can unsuscribe at anytime.
        </p>
        <div className="input-areas">
          <form>
            <input
              name="email"
              type="email"
              placeholder="Your Email"           
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
            <Link to="/">Website</Link>
            <Link to="/">Facebook</Link>
                     </div>
        </div>
      </div> 
          <section className="media-media">
            <div className="social-media-wrap">
            <div className="footer-logo">
            <Link to='/' className="social-logo">
              Stone Cold Records
              <img src={ Logo } className='label-logo' alt="logo" />
            </Link>

            </div>
            </div>
          </section>
      </div>
     );
}

export default footer;
