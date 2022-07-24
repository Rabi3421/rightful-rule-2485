import React from 'react';
import Foot from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={Foot.container}>
        <div className={Foot.top}>
            <div className={Foot.left}>
                <h6>Signup to our email list and receive 20% off your next order</h6>
                <button>SIGN UP</button>
            </div>
            <div className={Foot.right}>
                <h6>Connect with us</h6>
                <img alt="props" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png"/>
                <img alt="props" src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-png-full-colour-glyph-1200x1199.png"/>
                <img alt="props" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/330px-Twitter-logo.svg.png"/>
                <img alt="props" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"/>
                <img alt="props" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/150px-Snapchat_logo.svg.png"/>
            </div>
        </div>
        <div className={Foot.bottom}>
            <div>
                <h6>Help & Information</h6>
                <p>Customer Service</p>
                <p>Delivery Information</p>
                <p>Returns & Refunds</p>
                <p>Help Center</p>
                <p>Track my order</p>
                <p>Accessibility</p>
                <p>Cookie Settings</p>
            </div>
            <div>
                <h6>About SkinStore</h6>
                <p>Key Workers Discount</p>
                <p>About Us</p>
                <p>Affiliate Program</p>
                <p>Brand directory</p>
                <p>Coupon Codes</p>
                <p>Refer A Friend</p>
                <p>Student Discount</p>
                <p>Join SkinStore Experts</p>
            </div>
            <div>
                <h6>Legal</h6>
                <p>Cookie Information</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Modern Slavery Statement</p>
            </div>
            <div>
                <h6>How To Contact Us</h6>
                <p>Message Us</p>
                <p>Free Beauty Consultations</p>
            </div>
        </div>
    </div>
  )
}

