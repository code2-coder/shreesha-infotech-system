import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import "./BlogPage.css";

const reelsData = [
  {
    type: "video",
    src: "/videos/WhatsApp Video 2026-03-19 at 2.24.58 PM.mp4",
    caption: "CCTV Installation in Nashik",
  },
  // {
  //   type: "video",
  //   src: "/videos/video2.mp4",
  //   caption: "Network Routing Tutorial",
  // },
  // {
  //   type: "image",
  //   src: "/images/security_installation.jpg",
  //   caption: "Outdoor Bullet Camera Setup",
  // },
];

const BlogPage = () => {
  const videoRefs = useRef([]);

  // Pause other videos when one starts playing
  const handlePlay = (index) => {
    videoRefs.current.forEach((vid, i) => {
      if (vid && i !== index) {
        vid.pause();
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog | SHREESHA INFOTECH SYSTEM</title>
      </Helmet>

      <div className="page-header">
        <h1>Security Insights & Video Gallery</h1>
        <p>Explore our latest CCTV installations, networking solutions, and expert insights</p>
      </div>

      <section className="reels-section">
        <div className="reels-container">
          {reelsData.map((item, index) => (
            <div key={index} className="reel-card">
              {item.type === "video" ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  className="reel-media"
                  controls
                  onPlay={() => handlePlay(index)} // ✅ clean control
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="reel-media"
                />
              )}

              <p className="caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;