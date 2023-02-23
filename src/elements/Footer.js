import React from 'react'
import { Button } from './Button';

function footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join Stone Cold Records newsletter to receive info on
            our artist and music
        </p>
        <p className="footer-subscription-text">
            You can unsuscribe at anytime.
        </p>
        <div className="input-areas">
        <form>
            <input type="email"  name="email" placeholder="Your Email"
            className="footer-input" />
             <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
        </div>
      </section>
    </div>
  )
}

export default footer;
