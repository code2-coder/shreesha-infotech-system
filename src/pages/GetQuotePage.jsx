import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { submitQuoteStart, submitQuoteSuccess, submitQuoteFailure } from '../redux/quoteSlice';
import { HiCheckCircle, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { Helmet } from 'react-helmet-async';
import './GetQuotePage.css';

const GetQuotePage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.quote);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    requirement: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitQuoteStart());
    
    // Send Data to WhatsApp
    const message = `*New Lead / Inquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Requirement:* ${formData.requirement}`;
    const whatsappUrl = `https://wa.me/919657586364?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Simulate API Call success
    setTimeout(() => {
      dispatch(submitQuoteSuccess({ ...formData, id: Date.now() }));
      setFormData({ name: '', phone: '', address: '', requirement: '' });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact | SHREESHA INFOTECH SYSTEM</title>
        <meta name="description" content="Request a personalized quote for your CCTV and security system needs." />
      </Helmet>

      <section className="quote-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="quote-header text-center"
          >
            <h1 className="quote-title">Get In Touch</h1>
            <p className="quote-desc">
              Need a quote or urgent repair? Reach out to us via the form below or contact us directly. We respond promptly.
            </p>
          </motion.div>

          <div className="quote-container">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="contact-info-panel"
            >
              <h2 className="panel-heading">Contact Information</h2>
              
              <div className="info-block">
                <div className="icon-wrap">
                  <HiOutlineLocationMarker />
                </div>
                <div className="info-text">
                  <h3>Our Location</h3>
                  <p>Flat no. A-08, Lalit Co op Society<br/>opp. Nilesh Super Market, Tidke Colony<br/>Nashik, Maharashtra 422002</p>
                </div>
              </div>

              <div className="info-block">
                <div className="icon-wrap">
                  <HiOutlinePhone />
                </div>
                <div className="info-text">
                  <h3>Phone Number</h3>
                  <p>+91 96575 86364</p>
                  <p className="small-text">Available on WhatsApp</p>
                </div>
              </div>

              <div className="info-block">
                <div className="icon-wrap">
                  <HiOutlineMail />
                </div>
                <div className="info-text">
                  <h3>Email Address</h3>
                  <p>maheshpatil4018@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="quote-form-card"
            >
              {status === 'succeeded' ? (
                <div className="success-message">
                  <HiCheckCircle className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will review your requirements and get back to you shortly.</p>
                  <button className="btn btn-outline" onClick={() => dispatch({ type: 'quote/resetQuoteStatus' })}>Submit Another</button>
                </div>
              ) : (
                <form className="quote-form" onSubmit={handleSubmit}>
                  <div className="form-group grid-2">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name</label>
                      <input type="text" id="name" name="name" className="form-input" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone No.</label>
                      <input type="tel" id="phone" name="phone" className="form-input" required value={formData.phone} onChange={handleChange} placeholder="+91 90000 00000" />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" id="address" name="address" className="form-input" required value={formData.address} onChange={handleChange} placeholder="Enter your city/address..." />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="requirement" className="form-label">Message / Requirement</label>
                    <textarea id="requirement" name="requirement" className="form-textarea" required rows="5" value={formData.requirement} onChange={handleChange} placeholder="Tell us what you need..."></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetQuotePage;
