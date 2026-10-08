import Section from "../components/Section.jsx";
import Chart from "../components/Chart.jsx";
import { content } from "../data/content.js";

export default function Projects() {
  return (
    <Section label="Projects" title="Selected case studies" intro="Sample projects. Replace with real work.">
      <div className="grid grid-3">
        {content.projects.map((p) => (
          <article className="card project" key={p.title}>
            <div className="chart-box"><Chart type={p.chart} data={p.data} /></div>
            <small className="tag">{p.tag}</small>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <p className="result">{p.result}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
