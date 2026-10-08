import Section from "../components/Section.jsx";
import { content } from "../data/content.js";

export default function Skills() {
  return (
    <Section label="Skills" title="What I work with" intro="Tools and methods I use most often.">
      <div className="grid grid-4">
        {content.skills.map((s) => (
          <article className="card" key={s.name}>
            <small className="mono">{s.level}</small>
            <h3>{s.name}</h3>
            <p>{s.note}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
