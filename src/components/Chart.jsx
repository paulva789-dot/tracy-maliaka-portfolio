// Tiny inline SVG charts, coloured by the theme tokens.
export default function Chart({ type, data }) {
  const W = 220, H = 90;
  const max = Math.max(...data);

  if (type === "bar") {
    const bw = W / data.length;
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Bar chart">
        {data.map((v, i) => {
          const h = (v / max) * (H - 8);
          return (
            <rect key={i} x={i * bw + 6} y={H - h} width={bw - 12} height={h} rx="4"
              fill="var(--gold)" opacity={0.45 + (i / data.length) * 0.55} />
          );
        })}
      </svg>
    );
  }

  if (type === "line") {
    const step = W / (data.length - 1);
    const pts = data.map((v, i) => [i * step, H - 6 - (v / max) * (H - 14)]);
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
    return (
      <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Line chart">
        <path d={`${d} L ${W} ${H} L 0 ${H} Z`} fill="var(--gold)" opacity="0.14" />
        <path d={d} fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="3.5" fill="var(--surface)" stroke="var(--gold)" strokeWidth="2" />
        ))}
      </svg>
    );
  }

  // donut
  const total = data.reduce((a, b) => a + b, 0);
  const r = 32, c = 2 * Math.PI * r;
  let offset = 0;
  const shades = [1, 0.62, 0.32];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Donut chart">
      <g transform={`translate(${W / 2} ${H / 2}) rotate(-90)`}>
        {data.map((v, i) => {
          const len = (v / total) * c;
          const el = (
            <circle key={i} r={r} fill="none" stroke="var(--gold)" strokeWidth="16"
              strokeDasharray={`${len - 2} ${c - len + 2}`} strokeDashoffset={-offset}
              opacity={shades[i % shades.length]} />
          );
          offset += len;
          return el;
        })}
      </g>
    </svg>
  );
}
