export default function Section({ label, title, intro, children }) {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        {intro && <p className="intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
