import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./BlogPage.css";

const reelsData = [
  {
    type: "video",
    src: "/videos/WhatsApp Video 2026-03-19 at 2.24.58 PM.mp4",
    caption: "CCTV Installation in Nashik",
  },
  {
    type: "video",
    src: "/videos/AnotherVideo.mp4",
    caption: "Network Routing Tutorial",
  },
  {
    type: "image",
    src: "/images/security_installation.jpg",
    caption: "Outdoor Bullet Camera Setup",
  },
];

const BlogPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayVideo = (index) => setActiveVideo(index);
  const handleCloseVideo = () => setActiveVideo(null);

  return (
    <>
      <Helmet>
        <title>Blog | SHREESHA INFOTECH SYSTEM</title>
        <meta
          name="description"
          content="Explore our short videos, photos, and security insights."
        />
      </Helmet>

      <div className="page-header dark-hero">
        <div className="container text-center">
          <h1 className="hero-title">Latest Reels & Insights</h1>
          <p className="hero-subtitle">Swipe through quick videos & photos</p>
        </div>
      </div>

      <section className="reels-section">
        <div className="reels-container">
          {reelsData.map((item, index) => (
            <div key={index} className="reel-card">
              {item.type === "video" ? (
                <>
                  {/* Small card video is paused by default */}
                  <video
                    src={item.src}
                    className="reel-video"
                    onClick={() => handlePlayVideo(index)}
                    controls={false}
                  ></video>

                  {/* Expanded overlay video */}
                  {activeVideo === index && (
                    <div className="video-overlay">
                      <button
                        className="close-btn"
                        onClick={handleCloseVideo}
                        aria-label="Close video"
                      >
                        &#10005;
                      </button>
                      <video
                        src={item.src}
                        controls
                        autoPlay
                        className="expanded-video"
                      ></video>
                    </div>
                  )}
                </>
              ) : (
                <img src={item.src} alt={item.caption} className="reel-image" />
              )}
              <p className="reel-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;