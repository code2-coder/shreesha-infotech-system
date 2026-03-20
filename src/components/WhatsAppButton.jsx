import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919657586364?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src="/whatsapp.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;