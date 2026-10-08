import Section from "../components/Section.jsx";
import { content } from "../data/content.js";

export default function About() {
  return (
    <Section label="About" title="About me">
      <div className="about-grid">
        <div>
          {content.fullBio.map((p, i) => (
            <p className="lead" key={i}>{p}</p>
          ))}
        </div>
        <div className="facts">
          {content.facts.map((f) => (
            <div className="card fact" key={f.label}>
              <small>{f.label}</small>
              <strong>{f.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
