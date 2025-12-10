import { Link } from "react-router-dom";
export function Header() {
  return (
    <header style={{ borderBottom: "1px solid #ccc" }}>
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Link to="/">jord.tools</Link>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/knowledge-base/frameworks">Frameworks</Link>
          <Link to="/knowledge-base/tools">Tools</Link>
          <Link to="/knowledge-base/projects">Projects</Link>
        </nav>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href="https://github.com/jordankearfott" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}