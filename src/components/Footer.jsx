import React from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="cta-banner">
        <Link to="/quote" className="btn cta-btn">
          Contact Us Now
        </Link>
      </div>
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-col brand-col">
            <Link
              to="/"
              className="footer-brand"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="/logo.png"
                alt="Shreesha Infotech"
                style={{ height: "45px", marginRight: "10px" }}
              />
              <span>
                SHREESHA <strong>INFOTECH</strong>
              </span>
            </Link>
            <p className="footer-desc">
              Your trusted partner for professional CCTV installation,
              maintenance, and repair services. Securing homes and businesses
              with cutting-edge technology.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/shreeshainfotech"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://share.google/Mx3PDPosgQxqT32SW"
                aria-label="Location"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="quick-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/quote">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-list">
              <li>
                <HiLocationMarker className="contact-icon" />
                <span>
                  Flat no. A-08, Lalit Co op Society, opp. Nilesh Super Market,
                  Tidke Colony, Nashik, Maharashtra 422002
                </span>
              </li>
              <li>
                <HiPhone className="contact-icon" />
                <span>+91 96575 86364</span>
              </li>
              <li>
                <HiMail className="contact-icon" />
                <span>maheshpatil4018@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Shreesha Infotech System. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
