// All editable text lives here. Replace the sample details with Tracy's real ones.
export const content = {
  name: "Tracy Maliaka",
  firstName: "Tracy",
  lastName: "Maliaka",
  role: "Data Analyst",
  // To use a real photo: put it in /public and set heroPhoto: "/tracy.jpg"
  heroPhoto: "",
  typed: [
    "turns raw data into decisions.",
    "builds clear dashboards.",
    "writes clean SQL and Python.",
    "tells stories with numbers.",
  ],
  available: "Available for new projects",
  shortBio:
    "I'm a data analyst who enjoys turning messy spreadsheets and databases into clear answers. I work with SQL, Python, Power BI and Excel to help teams see what is happening and decide what to do next.",
  fullBio: [
    "I'm a data analyst who enjoys turning messy spreadsheets and databases into clear answers. I work with SQL, Python, Power BI and Excel to help teams see what is happening and decide what to do next.",
    "I care about clean data, honest charts and short write-ups that people actually read. Whether it is a monthly dashboard or a one-off investigation, I aim to leave the team with something they can reuse.",
  ],
  facts: [
    { label: "Focus", value: "Business & product analytics" },
    { label: "Tools", value: "SQL, Python, Power BI, Excel" },
    { label: "Based in", value: "Nairobi, Kenya" },
    { label: "Languages", value: "English, Swahili" },
  ],
  skills: [
    { name: "SQL", level: "Advanced", note: "Joins, window functions, CTEs and query tuning." },
    { name: "Python", level: "Advanced", note: "pandas, NumPy and matplotlib for analysis." },
    { name: "Power BI", level: "Advanced", note: "Data models, DAX and interactive dashboards." },
    { name: "Excel", level: "Advanced", note: "Pivot tables, Power Query and clean models." },
    { name: "Tableau", level: "Intermediate", note: "Visual exploration and shareable views." },
    { name: "Statistics", level: "Intermediate", note: "Hypothesis tests, regression and A/B tests." },
    { name: "Data cleaning", level: "Advanced", note: "Validation, deduplication and documentation." },
    { name: "Storytelling", level: "Advanced", note: "One-page briefs for non-technical readers." },
  ],
  projects: [
    {
      title: "Sales Performance Dashboard",
      tag: "Power BI",
      chart: "bar",
      summary: "Combined three regional sales files into one model and a dashboard that shows revenue, margin and trends.",
      result: "Cut weekly reporting time from 4 hours to 20 minutes.",
      data: [34, 52, 41, 68, 59, 80],
    },
    {
      title: "Customer Churn Analysis",
      tag: "Python",
      chart: "line",
      summary: "Explored subscription data to find which behaviours come before a customer cancels.",
      result: "Flagged a high-risk segment that made up 60% of churn.",
      data: [70, 64, 66, 52, 48, 36, 30],
    },
    {
      title: "Survey Insights Report",
      tag: "SQL + Excel",
      chart: "donut",
      summary: "Cleaned and analysed 2,000 survey responses and wrote a short brief for leadership.",
      result: "Three recommendations adopted in the next quarter plan.",
      data: [45, 30, 25],
    },
  ],
  experience: [
    {
      kind: "Experience",
      title: "Data Analyst",
      place: "Company Name",
      period: "2023 – Present",
      points: [
        "Build and maintain dashboards used by sales and operations teams.",
        "Write SQL and Python to automate recurring reports.",
        "Present findings in short briefs to non-technical stakeholders.",
      ],
    },
    {
      kind: "Experience",
      title: "Junior Data Analyst",
      place: "Company Name",
      period: "2021 – 2023",
      points: [
        "Cleaned and validated data from several source systems.",
        "Supported monthly reporting and ad-hoc analysis requests.",
      ],
    },
    {
      kind: "Education",
      title: "BSc in Statistics (or related)",
      place: "University Name",
      period: "2017 – 2021",
      points: ["Coursework in statistics, databases and data visualisation."],
    },
  ],
  services: [
    { title: "Dashboards", text: "Interactive Power BI or Tableau dashboards built around the questions your team asks." },
    { title: "Data preparation", text: "Cleaning, joining and documenting messy data so it is ready to use." },
    { title: "Analysis", text: "Exploratory and statistical analysis to answer a specific business question." },
    { title: "Insight briefs", text: "Short written summaries with charts and clear next steps." },
  ],
  contact: {
    email: "tracy@example.com",
    location: "Nairobi, Kenya",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
      { label: "GitHub", href: "https://github.com/your-username" },
    ],
  },
};
