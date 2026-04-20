import { StatusCard } from "../components/StatusCard";

const stackItems = [
  {
    title: "Frontend",
    description: "React + TypeScript + Vite application scaffold is ready."
  },
  {
    title: "Backend",
    description: "NestJS API scaffold is ready with a health check endpoint."
  },
  {
    title: "CI",
    description: "GitHub Actions runs lint, typecheck, test, and build."
  }
];

export function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="eyebrow">Project_NULL</p>
        <h1>Monorepo starter for React and NestJS</h1>
        <p className="hero-copy">
          This repository is prepared for a web frontend, an API backend, and a
          shared package layer that can grow with the project.
        </p>
      </section>

      <section className="status-grid" aria-label="Project status">
        {stackItems.map((item) => (
          <StatusCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </main>
  );
}
