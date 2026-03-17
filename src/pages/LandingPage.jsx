import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiShieldCheck, HiOutlineLightBulb, HiDesktopComputer, HiStar } from 'react-icons/hi';
import { FaFingerprint, FaTools } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';
import { Helmet } from 'react-helmet-async';
import './LandingPage.css';

const services = [
  { icon: <MdOutlineSecurity />, title: 'New Installation', desc: 'Custom security system setups tailored for your property, ensuring zero blind spots.' },
  { icon: <FaTools />, title: 'Repair & Maintenance', desc: 'Swift diagnostics and repairs to keep your security infrastructure active 24/7.' },
  { icon: <HiDesktopComputer />, title: 'System Upgrades', desc: 'Transition from legacy analog cameras to high-definition AI-powered IP camera systems.' },
];

const reviews = [
  { name: "Rahul Deshmukh", role: "Business Owner", text: "Shreesha Infotech completely overhauled our office security. The new 4K cameras are crystal clear and the biometric setup is flawless." },
  { name: "Priya Sharma", role: "Homeowner", text: "Very prompt and professional service. They installed 4 cameras around my house and set up the mobile app perfectly." },
  { name: "Amit Patil", role: "Retail Manager", text: "Excellent AMC service. We had an issue with our NVR and their technician fixed it within hours safely and securely." },
];

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>SHREESHA INFOTECH SYSTEM | Smart Vision</title>
        <meta name="description" content="Expert CCTV installation, repair, biometric systems, and solar camera setups in Nashik, Maharashtra." />
      </Helmet>
      
      <section className="hero-light">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="anim-orb orb-1"
        />
        <motion.div 
          animate={{ x: [0, 40, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="anim-orb orb-2"
        />
        <motion.div 
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="anim-orb orb-3"
        />

        <div className="container hero-container text-left hero-grid">
          <div className="hero-content-col">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="hero-badge"
            >
              <HiShieldCheck className="badge-icon" /> Top Rated CCTV Experts in Nashik
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-heading"
            >
              Secure Your World With <br/>
              <motion.span 
                animate={{ textShadow: ["0 0 20px rgba(37,99,235,0.4)", "0 0 50px rgba(37,99,235,0.8)", "0 0 20px rgba(37,99,235,0.4)"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="glow-text"
              >
                Smart Vision
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtext"
            >
              SHREESHA INFOTECH SYSTEM elevates your security. We provide premium CCTV, biometric, and smart office solutions tailored to your needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-actions-left"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link to="/quote" className="btn btn-primary">Get a Free Quote</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <Link to="/services" className="btn btn-outline ml-2">Browse Services</Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-image-col"
          >
            <motion.img 
              src="/hero_image.png" 
              alt="Floating Smart Security Tech" 
              className="hero-tech-img"
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-head text-center">
            <h2>Comprehensive Security Solutions</h2>
            <p>From homes to enterprise environments, we install and maintain robust systems.</p>
          </div>

          <div className="services-3-col">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 25px 30px -5px rgba(37, 99, 235, 0.15)" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="service-light-card card"
              >
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="products-section section-pad bg-white">
        <div className="container">
          <div className="section-head text-center">
            <h2>Premium Hardware</h2>
            <p>We source top-quality cameras and networking devices for long-term reliability.</p>
          </div>
          
          <div className="products-grid">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="product-card card"
            >
              <div className="prod-img-wrapper">
                <img src="/dome.png" alt="Dome Camera" className="product-img" />
              </div>
              <h3>Indoor Dome Cameras</h3>
              <p>Discreet and tamper-proof security.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="product-card card"
            >
              <div className="prod-img-wrapper">
                <img src="/bullet.png" alt="Bullet Camera" className="product-img" />
              </div>
              <h3>Outdoor Bullet Cameras</h3>
              <p>Weather-resistant and long-range.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="product-card card"
            >
              <div className="prod-img-wrapper">
                <img src="/nvr.png" alt="NVR/DVR System" className="product-img" />
              </div>
              <h3>NVR / DVR Systems</h3>
              <p>High-capacity and secure local storage.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="reviews-section section-pad">
        <div className="container">
          <div className="section-head text-center">
            <h2>Trusted by the Community</h2>
            <p>Don't just take our word for it. Here is what our clients have to say about our services.</p>
          </div>
          
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="review-card card"
              >
                <div className="stars">
                  <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <div className="author-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
