import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow center-text">
        <h1>Page not found</h1>
        <p className="muted">This page doesn't exist.</p>
        <Link to="/" className="btn primary">Go home</Link>
      </div>
    </section>
  );
}
