import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { HiCheckCircle } from 'react-icons/hi';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SHREESHA INFOTECH SYSTEM</title>
        <meta name="description" content="Learn more about SHREESHA INFOTECH SYSTEM, your trusted partner in CCTV and advanced security solutions." />
      </Helmet>

      <div className="page-header dark-hero">
        <div className="container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title"
          >
            About Shreesha Infotech
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-subtitle"
          >
            Dedicated to providing top-tier security solutions across Nashik since our inception.
          </motion.p>
        </div>
      </div>

      <section className="section-pad">
        <div className="container about-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-visual"
          >
            <div className="about-img-wrapper">
              <img src="/about_tech.png" alt="Security Excellence" className="about-img" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h2 className="title-md">Your Security, Our Priority</h2>
            <p className="about-text">
              At Shreesha Infotech System, we understand that security is not a luxury, but a necessity. Founded with the mission to bring reliable and affordable security systems to homes and offices in Nashik, we have grown into a trusted name in the industry.
            </p>
            <div className="core-values-list">
              <ul>
                <li><HiCheckCircle className="val-icon"/> <strong>24/7 Support:</strong> Always here when you need us</li>
                <li><HiCheckCircle className="val-icon"/> <strong>Quality Hardware:</strong> Best-in-class security equipment</li>
                <li><HiCheckCircle className="val-icon"/> <strong>Expert Installation:</strong> Professional and clean setup</li>
                <li><HiCheckCircle className="val-icon"/> <strong>Local Expertise:</strong> Proudly serving the Nashik area</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
