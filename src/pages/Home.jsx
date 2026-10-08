import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import { content } from "../data/content.js";

export default function Home() {
  return (
    <>
      <Hero />
      <Section label="01 About" title="A little about me">
        <p className="lead">{content.shortBio}</p>
        <Link to="/about" className="btn btn-ghost">Read more</Link>
      </Section>
    </>
  );
}
