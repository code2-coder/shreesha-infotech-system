import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404 - Page Not Found | SHREESHA INFOTECH SYSTEM</title>
    </Helmet>

    <main style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
        Oops! The page you were looking for does not exist.
      </p>
      <Link
        to="/"
        style={{
          color: "#fff",
          background: "#1e3a84",
          padding: "12px 16px",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Go back home
      </Link>
    </main>
  </>
);

export default NotFoundPage;
