import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTools, FaFingerprint } from "react-icons/fa";
import { HiOutlineLightBulb, HiDesktopComputer } from "react-icons/hi";
import "./ServicesPage.css";

const ServicesPage = () => {
  const serviceDetails = [
    {
      id: 1,
      icon: <MdOutlineSecurity />,
      img: "/svc_install.png",
      title: "New Installation",
      desc: "Complete end-to-end setup of modern CCTV camera systems for both residential and commercial properties.",
    },
    {
      id: 2,
      icon: <FaTools />,
      img: "/svc_repair.png",
      title: "Repair & Maintenance",
      desc: "Annual maintenance contracts and quick repair services for any failing hardware.",
    },
    {
      id: 3,
      icon: <HiDesktopComputer />,
      img: "/svc_upgrade.png",
      title: "System Upgrades",
      desc: "Upgrade from old analog cameras to sharp, 4K IP cameras with AI-detection features.",
    },
    {
      id: 4,
      icon: <HiDesktopComputer />,
      img: "/svc_cabling.png",
      title: "Structured Cabling",
      desc: "We construct secure network foundations and routing for all tech infrastructures in a modern office setup.",
    },
    {
      id: 5,
      icon: <FaFingerprint />,
      img: "/svc_biometric.png",
      title: "Biometric System Install",
      desc: "Seamlessly track and manage personnel access using state-of-the-art biometric and attendance tracking technologies.",
    },
    {
      id: 6,
      icon: <HiOutlineLightBulb />,
      img: "/svc_solar.png",
      title: "Solar Camera Install",
      desc: "Remote areas? We deploy solar-powered surveillance options enabling autonomous security in off-grid locations.",
    },
    {
      id: 7,
      icon: <HiOutlineLightBulb />,
      img: "/aI-gps-track.jpg",
      title: "AI GPS Tracking System",
      desc: "Advanced AI-powered GPS tracking solutions for real-time vehicle monitoring, route tracking, and security management.",
    },
    {
      id: 8,
      icon: <FaTools />,
      img: "/inter_com.jpg",
      title: "Telephone Intercom System",
      desc: "Efficient intercom communication systems for homes, offices, and buildings, enabling secure and seamless internal communication.",
    },
    {
      id: 9,
      icon: <FaTools />,
      img: "/svc_tv.jpg",
      title: "Android TV Repair",
      desc: "Professional repair and maintenance services for Android TVs, including software issues, hardware faults, and performance optimization.",
    },
    {
      id: 10,
      icon: <HiOutlineLightBulb />,
      img: "/svc_water.jpg",

      title: "Water Purification",
      desc: "Installation and maintenance of water purification systems ensuring safe, clean, and healthy drinking water for homes and businesses.",
    },
    {
      id: 11,
      icon: <HiOutlineLightBulb />,
      img: "/ai-software.jpg",
      title: "AI Software Solutions",
      desc: "Smart AI-powered software solutions for automation, security, data analysis, and business optimization, helping you improve efficiency and decision-making.",
    },
    {
      id: 12,
      icon: <MdOutlineSecurity />,
      img: "/boom-barrier.jpg",
      title: "Boom Barrier System",
      desc: "Automated boom barrier systems for secure vehicle access control in residential societies, parking areas, toll gates, and commercial properties.",
    },
    {
      id: 13,
      icon: <FaTools />,
      img: "/pa-ahuja.jpg",
      title: "PA Ahuja Sound System",
      desc: "Professional PA (Public Address) sound system installation using Ahuja equipment for clear announcements, events, and communication in schools, offices, temples, and public spaces.",
    },
    {
      id: 14,
      icon: <FaTools />,
      img: "/inverter-battery.jpg",
      title: "Inverter & Battery Solutions",
      desc: "Reliable inverter and battery installation services providing uninterrupted power backup for homes, offices, and commercial spaces.",
    },
    {
      id: 15,
      icon: <FaTools />,
      img: "/ac-service.jpg",
      title: "AC Installation & Maintenance",
      desc: "Professional air conditioner installation, servicing, and maintenance for homes and commercial spaces, ensuring efficient cooling and long-lasting performance.",
    },
    {
      id: 16,
      icon: <FaTools />,
      img: "/fabrication.jpg",
      title: "Fabrication Work",
      desc: "Custom metal fabrication services including gates, grills, frames, and structural work for residential, commercial, and industrial projects.",
    },
    {
      id: 17,
      icon: <FaTools />,
      img: "/plumbing.jpg",
      title: "Plumbing Services",
      desc: "Expert plumbing solutions including pipe installation, leakage repair, fittings, and maintenance for residential and commercial properties.",
    },
    {
      id: 18,
      icon: <HiDesktopComputer />,
      img: "/computer-laptop.jpg",
      title: "Computer & Laptop Services",
      desc: "Sales, installation, repair, and upgrade services for new and old computers and laptops, ensuring smooth performance and reliability.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | SHREESHA INFOTECH SYSTEM</title>
        <meta
          name="description"
          content="Explore our premium services including CCTV installation, repair, biometric setup, and solar cameras."
        />
      </Helmet>

      <div className="services-cta-header">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="cta-blue-box"
          >
            <h1>Need a custom security solution?</h1>
            <p>
              Every property is different. Schedule a free site visit, and we'll
              help you determine exactly what you need.
            </p>
            <Link to="/quote" className="btn cta-blue-btn">
              Book Site Visit
            </Link>
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
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 30px -5px rgba(37, 99, 235, 0.15)",
                }}
                className="svc-featured-card card"
              >
                <div className="svc-img-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={item.id === 10 ? "svc-img water-img" : "svc-img"}
                  />
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
