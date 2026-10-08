import { Link } from "react-router-dom";
import { content } from "../data/content.js";
import { useTyped } from "../hooks.js";

export default function Hero() {
  const typed = useTyped(content.typed);

  return (
    <section className="hero">
      <div className="hero-photo" aria-hidden="true">
        {content.heroPhoto ? (
          <img src={content.heroPhoto} alt="" />
        ) : (
          <div className="photo-placeholder">
            <span className="ph-head" />
            <span className="ph-body" />
            <em>PHOTO PLACEHOLDER</em>
          </div>
        )}
        <div className="hero-fade" />
      </div>

      <div className="container hero-content">
        <span className="badge">
          <i /> {content.available}
        </span>
        <p className="eyebrow">{content.role}</p>
        <h1>
          {content.firstName}
          <br />
          <span className="gold">{content.lastName}</span>
        </h1>
        <p className="typed">
          <span>{typed}</span>
          <b className="caret" />
        </p>
        <div className="btn-row">
          <Link to="/projects" className="btn btn-gold">View projects</Link>
          <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
