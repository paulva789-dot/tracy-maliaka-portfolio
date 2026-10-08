import { content } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {content.name}. All rights reserved.</p>
    </footer>
  );
}
