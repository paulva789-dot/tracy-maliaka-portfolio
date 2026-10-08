import { useState } from "react";
import Section from "../components/Section.jsx";
import { content } from "../data/content.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { email, location, links } = content.contact;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <Section label="Contact" title="Let's talk" intro="Have data that needs a story? Send a message.">
      <div className="card contact-card">
        <div className="email-row">
          <a className="mono email" href={`mailto:${email}`}>{email}</a>
          <button className="btn btn-gold" onClick={copy}>{copied ? "Copied!" : "Copy email"}</button>
        </div>
        <div className="btn-row">
          {links.map((l) => (
            <a key={l.label} className="btn btn-ghost" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
        <p className="muted">{location}</p>
      </div>
    </Section>
  );
}
