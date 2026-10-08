import Section from "../components/Section.jsx";
import { content } from "../data/content.js";

export default function Experience() {
  return (
    <Section label="Experience" title="Experience and education">
      <div className="timeline">
        {content.experience.map((e, i) => (
          <article className="card tl-item" key={i}>
            <div className="tl-head">
              <small className="tag">{e.kind}</small>
              <span className="mono">{e.period}</span>
            </div>
            <h3>{e.title}</h3>
            <p className="place">{e.place}</p>
            <ul>
              {e.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
