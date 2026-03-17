import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdOutlineSecurity } from 'react-icons/md';
import { FaTools, FaFingerprint } from 'react-icons/fa';
import { HiOutlineLightBulb, HiDesktopComputer } from 'react-icons/hi';
import './ServicesPage.css';

const ServicesPage = () => {
  const serviceDetails = [
    {
      id: 1,
      icon: <MdOutlineSecurity />,
      img: '/svc_install.png',
      title: 'New Installation',
      desc: 'Complete end-to-end setup of modern CCTV camera systems for both residential and commercial properties.'
    },
    {
      id: 2,
      icon: <FaTools />,
      img: '/svc_repair.png',
      title: 'Repair & Maintenance',
      desc: 'Annual maintenance contracts and quick repair services for any failing hardware.'
    },
    {
      id: 3,
      icon: <HiDesktopComputer />,
      img: '/svc_upgrade.png',
      title: 'System Upgrades',
      desc: 'Upgrade from old analog cameras to sharp, 4K IP cameras with AI-detection features.'
    },
    {
      id: 4,
      icon: <HiDesktopComputer />,
      img: '/svc_cabling.png',
      title: 'Structured Cabling',
      desc: 'We construct secure network foundations and routing for all tech infrastructures in a modern office setup.'
    },
    {
      id: 5,
      icon: <FaFingerprint />,
      img: '/svc_biometric.png',
      title: 'Biometric System Install',
      desc: 'Seamlessly track and manage personnel access using state-of-the-art biometric and attendance tracking technologies.'
    },
    {
      id: 6,
      icon: <HiOutlineLightBulb />,
      img: '/svc_solar.png',
      title: 'Solar Camera Install',
      desc: 'Remote areas? We deploy solar-powered surveillance options enabling autonomous security in off-grid locations.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | SHREESHA INFOTECH SYSTEM</title>
        <meta name="description" content="Explore our premium services including CCTV installation, repair, biometric setup, and solar cameras." />
      </Helmet>
      
      <div className="services-cta-header">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cta-blue-box"
          >
            <h1>Need a custom security solution?</h1>
            <p>Every property is different. Schedule a free site visit, and we'll help you determine exactly what you need.</p>
            <Link to="/quote" className="btn cta-blue-btn">Book Site Visit</Link>
          </motion.div>
        </div>
      </div>

      <section className="section-pad bg-light">
        <div className="container">
          <div className="services-grid-detailed">
            {serviceDetails.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 25px 30px -5px rgba(37, 99, 235, 0.15)" }}
                className="svc-featured-card card"
              >
                <div className="svc-img-wrapper">
                  <img src={item.img} alt={item.title} className="svc-img" />
                </div>
                <div className="svc-content-wrapper">
                  <div className="svc-icon-round">{item.icon}</div>
                  <h2 className="svc-card-title">{item.title}</h2>
                  <p className="svc-card-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
