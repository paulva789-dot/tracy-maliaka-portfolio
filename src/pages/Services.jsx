import Section from "../components/Section.jsx";
import { content } from "../data/content.js";

export default function Services() {
  return (
    <Section label="Services" title="How I can help">
      <div className="grid grid-4">
        {content.services.map((s, i) => (
          <article className="card" key={s.title}>
            <small className="mono">0{i + 1}</small>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
