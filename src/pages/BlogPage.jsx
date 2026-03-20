import React from "react";
import { Helmet } from "react-helmet-async";
import "./BlogPage.css";

const reelsData = [
  {
    type: "video",
    src: "/videos/WhatsApp Video 2026-03-19 at 2.24.58 PM.mp4",
    caption: "CCTV Installation in Nashik"
  },
  // {
  //   type: "image",
  //   src: "#",
  //   caption: "Outdoor bullet camera setup"
  // },
  // {
  //   type: "video",
  //   src: "",
  //   caption: "Network routing tutorial"
  // },
];

const BlogPage = () => {
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
                <iframe
                  title={`reel-video-${index}`}
                  src={item.src}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={item.src} alt={item.caption} />
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